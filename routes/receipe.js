import express from 'express';
import Receipe from '../models/Receipe.js';
import User from '../models/User.js';

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


// PATCH route to update a receipe
router.patch('/:id', async (req, res) => {
    try {
        const receipeId = req.params.id;
        const updateData = req.body;
        // Find the receipe and update it
        const updatedReceipe = await Receipe.findByIdAndUpdate(receipeId, updateData, {
            new: true,         // Return the updated receipe
            runValidators: true // Run validation for the updated fields
        });
        if (!updatedReceipe) {
            return res.status(404).json({ message: 'Receipe not found' });
        }
        res.json(updatedReceipe);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating receipe', error: err.message });
    }
});


// DELETE route to remove a receipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const receipeId = req.params.id;
        // find and delete the receipe by ID
        const deletedReceipe = await Receipe.findByIdAndDelete(receipeId);
        if (!deletedReceipe) {
            return res.status(404).json({ message: 'Receipe not found' });
        }
        res.status(200).json({ message: 'Receipe deleted successfully', deletedReceipe });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error deleting receipe', error: err.message });
    }
});




export default router;