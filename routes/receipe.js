import express from 'express';
import Receipe from '../models/Receipe.js';

const router = express.Router();

// POST route to create a new receipe
router.post('/', async (req, res) => {
    try {
        const { title, ingredients, instructions, createdBy } = req.body;
        // Basic validation
        if (!title || !ingredients || !instructions || !createdBy) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Create a new receipe
        const newreceipe = new Receipe({
            title,
            ingredients,
            instructions,
            createdBy,
        });
        // Save the receipe to the database
        const savedreceipe = await newreceipe.save();
        res.status(201).json(savedreceipe);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating receipe', error });
    }
});


// GET route to fetch all receipes
router.get('/', async (req, res) => {
    try {
        const receipes = await Receipe.find().populate('createdBy', 'username');
        res.json(receipes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});


export default router;