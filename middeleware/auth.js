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

function authRole(role) {
    return (req, res, next) => {
      if (req.user.role != role) {
        return res.status(401).send('Not allowed with current privilege');
      }
      next();
    }
}

module.exports = { verifiedFunction, authRole };
