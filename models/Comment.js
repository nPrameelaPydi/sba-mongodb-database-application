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
    },
    receipe: {
        type: Schema.Types.ObjectId,
        ref: 'receipe',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('Comment', commentSchema);
