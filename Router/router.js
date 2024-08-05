const express = require('express');
const userController = require('../Controller/userController');
const router = new express.Router();

// Register
router.post('/register', userController.registercontroller);

// Login
router.post('/login', userController.loginController);

module.exports = router;
