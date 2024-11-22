const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const { authenticateToken } = require('../Middleware/authMiddleware');

router.get('/',authenticateToken, userController.getuser);
router.put('/update', authenticateToken, userController.updateUser);
router.put('/changepassword', authenticateToken, userController.updatePassword);


module.exports = router;