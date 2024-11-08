import { Schema, model } from 'mongoose';

const receipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true, // Index title for quick searching by title
    },
    ingredients: {
        type: [String], // Array of strings
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true, // Index for filtering recipes by author
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // Index for sorting recipes by creation date        
    }
});

export default model('receipe', receipeSchema);
