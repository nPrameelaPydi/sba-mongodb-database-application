import express from 'express';
import Comment from '../models/Comment.js';
import User from '../models/User.js';
import Receipe from '../models/Receipe.js';

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

// DELETE route to remove a comment by ID
router.delete('/:id', async (req, res) => {
    try {
        const commentId = req.params.id;
        // Find and delete the comment by ID
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully', deletedComment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting comment', error: err.message });
    }
});


export default router;