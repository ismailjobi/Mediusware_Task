const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const upload = require('../Middleware/fileMiddeleware');

router.post('/signup',upload.single('picture'), authController.signup);
router.post('/login', authController.login);

module.exports = router;

