import 'dotenv/config';
// Require connection file to connect
import mongoose from 'mongoose';

await mongoose.connect(process.env.ATLAS_URI);

// Require Models for delete and create operations
import User from './models/User.js';
import Receipe from './models/Receipe.js';
import Comment from './models/Comment.js';

try {
    // Seed User data
    const users = [
        {
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'admin123',
        },
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'user123',
        },
        {
            name: 'Bob Smith',
            email: 'bob.smth@example1.com',
            password: 'password456',
        },
        {
            name: 'Charlie Brown',
            email: 'charlie.brown@example3.com',
            password: 'secret_password789',
        },
        {
            name: 'Michael Harris',
            email: 'michael.harris@example.com',
            password: 'password123',
        },
        {
            name: 'David Lee',
            email: 'david.lee@example.com',
            password: 'davidPassword99',
        },
    ];
    // Delete existing users (optional, comment out if not needed)
    await User.deleteMany({});
    // Create users and store them in a variable
    const createdUsers = await User.create(users);
    console.log('Users:', createdUsers);

    // Seed Receipe data
    const receipes = [
        {
            title: 'Chocolate Chip Cookies',
            ingredients: ['2 cups flour', '1 cup brown sugar', '1 cup butter', '2 eggs', '1 tsp baking soda', '1 tsp salt', '2 cups chocolate chips'],
            instructions: 'Preheat oven to 375°F. Cream together butter and sugar. Beat in eggs one at a time. Add dry ingredients and mix until just combined. Stir in chocolate chips. Drop by rounded tablespoons onto baking sheets. Bake for 10-12 minutes, or until golden brown. Let cool on a wire rack.',
            createdBy: createdUsers[0]._id,
        },
        {
            title: 'Spaghetti Aglio e Olio',
            ingredients: ['1 pound spaghetti', '1/4 cup extra virgin olive oil', '6 cloves garlic, minced', '1/2 teaspoon red pepper flakes', '1/4 cup chopped fresh parsley'],
            instructions: 'Cook spaghetti according to package directions. Drain and set aside. Heat olive oil in a large skillet over medium heat. Add garlic and red pepper flakes. Cook, stirring frequently, until garlic is golden brown. Add spaghetti to the skillet and toss to coat with the garlic oil. Sprinkle with parsley and serve immediately.',
            createdBy: createdUsers[1]._id,
        },
        {
            title: 'Mango Chicken Salad',
            ingredients: ['2 chicken breasts', '1 mango', '2 cups mixed salad greens', '1/2 cucumber', '1/4 red onion', '1/4 cup feta cheese', 'Olive oil', 'Salt and pepper', 'Balsamic vinaigrette dressing'],
            instructions: 'Grill the chicken breasts and slice them. Chop the mango, cucumber, and red onion. Combine everything in a bowl, top with feta cheese, and drizzle with balsamic vinaigrette.',
            createdBy: createdUsers[1]._id, // Replace with a valid User ID from your database
        },
        {
            title: 'Quinoa Stuffed Bell Peppers',
            ingredients: ['4 bell peppers', '1 cup cooked quinoa', '1 can black beans, drained', '1 cup corn kernels', '1/2 cup shredded cheese', '1 tsp cumin', '1 tsp paprika', 'Fresh cilantro', 'Olive oil'],
            instructions: 'Cut the tops off the bell peppers and remove the seeds. Mix the cooked quinoa, black beans, corn, cheese, cumin, and paprika. Stuff the peppers with the mixture and bake at 375°F for 20 minutes.',
            createdBy: createdUsers[2]._id, // Replace with a valid User ID from your database
        },
        {
            title: 'Garlic Butter Shrimp Pasta',
            ingredients: ['200g spaghetti', '300g shrimp, peeled and deveined', '4 cloves garlic, minced', '3 tbsp butter', '1/4 cup parsley, chopped', '1/4 cup grated parmesan cheese', 'Salt and pepper'],
            instructions: 'Cook the spaghetti. In a pan, melt butter and sauté garlic. Add shrimp and cook until pink. Toss the cooked pasta with shrimp, parsley, and parmesan. Serve with extra cheese.',
            createdBy: createdUsers[3]._id, // Replace with a valid User ID from your database
        },
        {
            title: "Creamy Tomato Soup and Grilled Cheese",
            ingredients: ["Tomatoes", "Garlic", "Onion", "Heavy cream", "Basil", "Bread", "Cheddar cheese"],
            instructions: "Preheat oven to 375°F. Cream together butter and sugar. Beat in eggs one at a time. Stir in vanilla, then gradually blend in the dry ingredients.",
            createdBy: createdUsers[0]._id, // Replace with actual User ID
        },
        {
            title: "Classic Pancakes",
            ingredients: ["Flour", "Baking powder", "Sugar", "Milk", "Eggs"],
            instructions: "Mix all ingredients and cook on a skillet until golden brown.",
            createdBy: createdUsers[4]._id, // Replace with actual User ID
        },
        {
            title: "Margherita Pizza",
            ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil"],
            instructions: "Spread sauce over dough, add cheese, and bake in oven at 450°F for 10-12 minutes until crust is golden.",
            createdBy: createdUsers[1]._id, // Replace with actual User ID
        },
        {
            title: 'Masala Dosa',
            ingredients: ['200g spaghetti', '300g shrimp, peeled and deveined', '4 cloves garlic, minced', '3 tbsp butter', '1/4 cup parsley, chopped', '1/4 cup grated parmesan cheese', 'Salt and pepper'],
            instructions: 'Cook the spaghetti. In a pan, melt butter and sauté garlic. Add shrimp and cook until pink. Toss the cooked pasta with shrimp, parsley, and parmesan. Serve with extra cheese.',
            createdBy: createdUsers[5]._id, // Replace with a valid User ID from your database
        },
        {
            title: 'Lemon Rice',
            ingredients: ['200g spaghetti', '300g shrimp, peeled and deveined', '4 cloves garlic, minced', '3 tbsp butter', '1/4 cup parsley, chopped', '1/4 cup grated parmesan cheese', 'Salt and pepper'],
            instructions: 'Cook the spaghetti. In a pan, melt butter and sauté garlic. Add shrimp and cook until pink. Toss the cooked pasta with shrimp, parsley, and parmesan. Serve with extra cheese.',
            createdBy: createdUsers[5]._id, // Replace with a valid User ID from your database
        },


    ];
    // Delete existing receipes (optional, comment out if not needed)
    await Receipe.deleteMany({});
    const createdReceipes = await Receipe.create(receipes);
    console.log('Receipes:', createdReceipes);

    // Seed Comment data
    const comments = [
        {
            content: 'These cookies are delicious!',
            author: createdUsers[0]._id,
            receipe: createdReceipes[0]._id,
        },
        {
            content: 'Great receipe! I added some red pepper flakes.',
            author: createdUsers[1]._id,
            receipe: createdReceipes[2]._id,
        },
        {
            content: 'This receipe was amazing! The flavors came together perfectly.',
            author: createdUsers[2]._id,
            receipe: createdReceipes[1]._id,
        },
        {
            content: 'I tried this receipe, and it was so easy to follow. My family loved it!',
            author: createdUsers[2]._id,
            receipe: createdReceipes[3]._id,
        },
        {
            content: 'Made this for dinner last night. Will definitely be making it again!',
            author: createdUsers[3]._id,
            receipe: createdReceipes[4]._id,
        },
        {
            content: 'This receipe was amazing! The flavors came together perfectly.',
            author: createdUsers[4]._id,
            receipe: createdReceipes[5]._id,
        },
        {
            content: 'I tried this receipe, and it was so easy to follow. My family loved it!',
            author: createdUsers[4]._id,
            receipe: createdReceipes[6]._id,
        },
        {
            content: 'This is a great receipe! I added some crushed red pepper flakes for extra heat.',
            author: createdUsers[5]._id,
            receipe: createdReceipes[2]._id,
        },
    ];
    // Delete existing comments (optional, comment out if not needed)
    await Comment.deleteMany({});
    const createdComments = await Comment.create(comments);
    console.log('Comments:', createdComments);


} catch (err) {
    console.error(err);
} finally {
    await mongoose.connection.close();
}