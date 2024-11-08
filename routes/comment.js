import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// POST route to create a new comment
router.post('/', async (req, res) => {
    try {
        const { content, author, receipe } = req.body;
        // Basic validation
        if (!content || !author || !receipe) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Create a new comment
        const newComment = new Comment({
            content,
            author,
            receipe,
        });
        // Save the comment to the database
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating comment', error });
    }
});

// GET route to fetch comments for a specific receipe
router.get('/:receipeId', async (req, res) => {
    try {
        const comments = await Comment.find({ receipe: req.params.receipeId }).populate('author', 'username');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH route to update a comment
router.patch('/:id', async (req, res) => {
    try {
        const commentId = req.params.id;
        const updateData = req.body;
        // Find the comment and update it
        const updatedComment = await Comment.findByIdAndUpdate(commentId, updateData, {
            new: true,         // Return the updated comment
            runValidators: true // Run validation for the updated fields
        });
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(updatedComment);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating comment', error: err.message });
    }
});


export default router;