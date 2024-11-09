# Receipe Hub
**Receipe Hub** is a web application that allows users to create, share, and manage recipes. Users can also comment on recipes shared by others, fostering a community-driven, recipe-sharing experience. The app is built with Node.js and MongoDB, offering a seamless backend for managing user accounts, recipes, and comments.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Receipe Routes](#receipe-routes)
  - [Comment Routes](#comment-routes)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features
- **User Management**: Users can sign up and manage their accounts.
- **Recipe Sharing**: Users can create, view, update, and delete their own recipes.
- **Commenting System**: Users can add comments to recipes to share feedback.
- **Data Validation**: Validations ensure all data is entered correctly.

## Technology Stack
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: To be implemented (suggested: React.js or a similar framework)
- **Database**: MongoDB Atlas or local MongoDB instance
- **Environment Variables**: For database connection (MongoDB URI)

## Setup Instructions

### Prerequisites
- **Node.js** and **npm**: Ensure both are installed. You can download them [here](https://nodejs.org/).
- **MongoDB database**: Use a local instance or set up a cloud database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Code editor**: A code editor like **Visual Studio Code** is recommended.

## Installation

### Clone the repository
```bash
git clone git@github.com:nPrameelaPydi/sba-mongodb-database-application.git
cd recipe-hub 
```
### Install Dependencies:
```bash
cd recipe-hub
npm install
```
### Set up environment variables
Create a `.env` file in the root directory and add the following:

```plaintext
PORT=3000
ATLAS_URI=your_mongodb_connection_string
```
### Start Server:
```bash
npm start
```
## Project Structure
```plaintext
recipe-hub/
  ├── server.js                  # Main server file (Express app setup)
  ├── models/                    # Mongoose models
  │   ├── Recipe.js              # Recipe schema and model
  │   ├── User.js                # User schema and model
  │   └── Comment.js             # Comment schema and model
  ├── routes/                    # Express route files
  │   ├── recipe.js              # Recipe API routes
  │   ├── user.js                # User API routes
  │   └── comment.js             # Comment API routes
  ├── README.md                  # Project documentation
  ├── package.json               # Project dependencies and scripts
  └── .gitignore                 # Git ignore rules (e.g., node_modules, .env)
```
## API Routes
### User Routes
```plaintext
Create a new user (POST /users)
Get all users (GET /users)
Update a user (PATCH /users/:id)
Delete a user (DELETE /users/:id)
```
### Recipe Routes
```plaintext
Create a new recipe (POST /recipes)
Get all recipes (GET /recipes)
Update a recipe (PATCH /recipes/:id)
Delete a recipe (DELETE /recipes/:id)
```
### Comment Routes
```plaintext
Create a new comment (POST /comments)
Get comments for a specific recipe (GET /comments/:recipeId)
Update a comment (PATCH /comments/:id)
Delete a comment (DELETE /comments/:id)
```
## Contributing
We welcome contributions to this project! Here's how you can contribute:
- Fork this repository on GitHub and create a new branch for your feature or bug fix.
- Implement your changes and write clear commit messages.
- Ensure your changes don't introduce new bugs or regressions.
- Push your changes to your forked repository.
- Submit a pull request to the main repository, explaining your changes and addressing any potential issues.

## Acknowledgements
* **Mongoose Documentation:** The comprehensive documentation provided by the Mongoose team has been instrumental in understanding and utilizing this powerful ODM.
* **Node.js and Express.js Communities:** The vibrant communities surrounding these technologies have offered valuable insights and solutions.