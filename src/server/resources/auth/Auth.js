const User = require('../users/User');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { JWT_SECRET, JWT_EXPIRES } = require('../../config');
const checkToken = expressJwt({ secret: JWT_SECRET });

exports.decodeToken = () => (req, res, next) => {
  if (req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = `Bearer ${req.query.access_token}`;
  }
  checkToken(req, res, next);
};

exports.refreshUser = () => (req, res, next) => {
  const { _id } = req.user;
  User.findById(_id)
    .then(user => {
      if (!user) {
        throw new Error('Invalid User');
      }
      req.user = user;
      next();
    })
    .catch(err => next(err));
};

exports.destroyUser = () => (req, res, next) => {
  req.user = null;
  next();
};

exports.verifyUser = () => (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new Error('Username and Password Required'));
  }
  User.findOne({ username })
    .then(user => {
      if (!user) {
        throw new Error('Invalid Username and/or Password');
      }
      return [user.comparePasswords(password), user];
    })
    .spread((match, user) => {
      if (!match) {
        throw new Error('Invalid Username and/or Password');
      }
      req.user = user;
      next();
    })
    .catch(err => next(err));
};

exports.signToken = id => jwt.sign(
  { _id: id },
  JWT_SECRET,
  { expiresInMinutes: JWT_EXPIRES }
);
