const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtConstants  = require('../Middleware/constant') ;

// Signup
exports.signup = async (req, res) => {
  try {
    // Check if there's an uploaded file and set picture filename
    const pictureFilename = req.file ? req.file.filename : 'profileicon.jpg';
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create the new user with the picture file name
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      picture: pictureFilename
    });
    
    // Save user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to register user' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, jwtConstants.secret , { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
