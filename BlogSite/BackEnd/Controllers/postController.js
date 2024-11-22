const Post = require('../Models/postModel');
const { DateTime } = require('luxon');

// Create Post
exports.createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, author: req.user.userId });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post' });
  }
};

// Get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve posts' });
  }
};

// Get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({_id: req.params.id}).populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve posts' });
  }
};

// Get All Posts
exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({author: req.user.userId}).populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve posts' });
  }
};

// Update Post
exports.updatePost = async (req, res) => {
  try {
    // Prepare the update object with req.body and updatedAt
    const updateData = {
        ...req.body, // Spread the incoming request body
        updatedAt: DateTime.now().toISO() // Update the updatedAt field to the current date and time
    };

    // Find the post and update it
    const post = await Post.findOneAndUpdate(
        { _id: req.params.id, author: req.user.userId },
        updateData, // Use the prepared update object
        { new: true } // Return the updated document
    );

    // Check if the post was found and updated
    if (!post) {
        return res.status(401).json({ error: 'Post not found or unauthorized' });
    }

    // Respond with the updated post
    res.json(post);
} catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ error: 'Failed to update post' });
}
};

// Delete Post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.userId });
    if (!post) return res.status(401).json({ error: 'Post not found or unauthorized' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete post' });
  }
};
