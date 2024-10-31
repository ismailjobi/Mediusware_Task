const express = require('express');
const connectDB = require('./Config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
