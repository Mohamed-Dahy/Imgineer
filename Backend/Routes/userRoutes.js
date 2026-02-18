const userController = require('../Controllers/userControllers');
const express = require('express');
const userRouter = express.Router();

userRouter.post('/register', userController.registerUser); // Done
userRouter.post('/login', userController.loginUser);// Done


module.exports = userRouter;