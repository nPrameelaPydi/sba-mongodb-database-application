import { Schema, model } from 'mongoose';

const receipeSchema = new Schema({
    title: {
        type: String,
        required: true,
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
        //required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('receipe', receipeSchema);
