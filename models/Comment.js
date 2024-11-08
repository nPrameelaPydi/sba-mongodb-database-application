import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true, //Index for retrieving all comments by a specific user

    },
    receipe: {
        type: Schema.Types.ObjectId,
        ref: 'receipe',
        required: true,
        index: true, // Index for retrieving all comments related to a recipe
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // Index for sorting comments by creation date
    },
});

export default model('Comment', commentSchema);
