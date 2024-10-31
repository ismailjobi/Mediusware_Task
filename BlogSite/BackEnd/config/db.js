const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blogSystem', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
