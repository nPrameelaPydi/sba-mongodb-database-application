import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

//import routes
import receipeRoutes from './routes/receipe.js';
import userRoutes from './routes/user.js';
import commentRoutes from './routes/comment.js';

//initialize App
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//Routes
app.use('/receipes', receipeRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.send(`Welcome to Receipe_Hub App`);
})

//MongoDB connection
await mongoose.connect(process.env.ATLAS_URI);
console.log('MongoDB connected')


//global error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something went wrong...");
})

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})




