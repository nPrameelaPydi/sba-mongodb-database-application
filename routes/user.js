import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST route to create a new user
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        // Create a new user
        const newUser = new User({
            name,
            email,
            password,
        });
        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// GET route to fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// PATCH route to update user
router.patch('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        if (!updateData) {
            return res.status(400).json({ message: 'No data provided for update' });
        }
        // Find the user by ID and update the fields provided in the request body
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true, // Return the updated user
            runValidators: true, // Validate the updated fields            
        });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser); // Return the updated user
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
});


export default router;
