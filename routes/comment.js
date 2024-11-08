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


export default router;