const jwt = require('jsonwebtoken');
const { SECRET_key } = require('../config');




const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, SECRET_key, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};


function authRole(role) {
    return (req, res, next) => {
      if (req.user.role != role) {
        return res.status(401).send('Not allowed with current privilege');
      }
      next();
    }
}

module.exports = { authenticateJWT, authRole };
