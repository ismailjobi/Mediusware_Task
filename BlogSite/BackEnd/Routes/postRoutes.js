const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');
const { authenticateToken } = require('../Middleware/authMiddleware');

router.get('/', postController.getPosts);
router.get('/userpost',authenticateToken, postController.getUserPosts);
router.get('/:id',authenticateToken, postController.getPosts);
router.post('/create', authenticateToken, postController.createPost);
router.put('/update/:id', authenticateToken, postController.updatePost);
router.delete('/delete/:id', authenticateToken, postController.deletePost);

module.exports = router;
