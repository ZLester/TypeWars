const User = require('./User');

exports.createOne = (req, res, next) => {
  const newUser = req.body;
  User.create(newUser)
    .then(user => res.json(user))
    .catch(err => next(err));
};

exports.retrieve = (req, res, next) => {
  const query = req.query;
  User.find(query)
    .populate('games')
    .exec()
    .then(users => res.json(users))
    .catch(err => next(err));
};

exports.retrieveOne = (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .populate('games')
    .exec()
    .then(user => res.json(user))
    .catch(err => next(err));
};

exports.retrieveCurrent = (req, res, next) => {
  if (!req.user) {
    return next(new Error('Not logged in'));
  }
  res.json(req.user);
};

exports.updateOne = (req, res, next) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { upsert: true };
  User.findByIdAndUpdate(id, updatedProps, options)
    .populate('games')
    .exec()
    .then(user => res.json(user))
    .catch(err => next(err));
};

exports.delete = (req, res, next) => {
  const query = req.query;
  User.remove(query)
    .then(users => res.json(users))
    .catch(err => next(err));
};

exports.deleteOne = (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .populate('games')
    .exec()
    .then(user => res.json(user))
    .catch(err => next(err));
};
