const userController = require('../Controllers/userControllers');
const express = require('express');
const authMiddleware = require('../middlewares/auth')
const userRouter = express.Router();


userRouter.post('/register', userController.registerUser); // Done
userRouter.post('/login', userController.loginUser);// Done
userRouter.get('/credits',authMiddleware,userController.userCredits) // Done

module.exports = userRouter;