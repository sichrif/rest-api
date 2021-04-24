const jwt = require('jsonwebtoken');
const { SECRET_key } = require('../config');


function verifiedFunction(req, res, next) {
  
  const token = req.headers.authorization;
  if (token == null) return res.sendStatus(401); // if there isn't any token
  try {
      const verified = jwt.verify(token, SECRET_key);
      req.user = verified;
      return next();
  } catch (error) {
      return res.status(400).send('Invalid token');
  }
}

function checkAdmin(req, res, next) {
  if (req.user.role === 'admin') {
    return next();
  }
  return res.status(401).send('Unauthorized');
}

function checkTeacher(req, res, next) {
    if (req.user.role === 'teacher') {
        return next();
    }
    return res.status(401).send('Unauthorized');
}

module.exports = { verifiedFunction, checkAdmin, checkTeacher };
