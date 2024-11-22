const jwt = require('jsonwebtoken');
const jwtConstants  = require('./constant') ;
exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, jwtConstants.secret);  // Use jwtConstants.secret
    req.user = verified;  // Attach verified user data to request
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
