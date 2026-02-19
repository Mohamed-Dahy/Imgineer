const express = require('express');
const imageController = require('../Controllers/imageController');
const authMiddleware = require('../middlewares/auth')
const imageRouter = express.Router();

imageRouter.post('/generate-image',authMiddleware,imageController.generateImage)

module.exports = imageRouter;