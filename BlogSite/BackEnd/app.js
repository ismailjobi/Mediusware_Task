const express = require('express');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const postRoutes = require('./Routes/PostRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
