const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('./../config');

function verifiedFunction(req, res, next) {
  
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY );
    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
}

function checkAdmin(req, res, next) {
  // Gather the jwt access token from the request header

  if (req.user.role === 'admin') {
    return next();
  }
  return res.status(401).send('Unauthorized');
}

module.exports = { verifiedFunction, checkAdmin };