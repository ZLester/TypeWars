const User = require('./User');

exports.createOne = (req, res) => {
  const newUser = req.body;
  User.create(newUser)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

exports.retrieve = (req, res) => {
  const query = req.query;
  User.find(query)
    .populate('game')
    .exec()
    .then(users => res.json(users))
    .catch(err => res.json(err));
};

exports.retrieveOne = (req, res) => {
  const query = { _id: req.params.id };
  User.findOne(query)
    .populate('game')
    .exec()
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { new: true, upsert: true };
  User.findByIdAndUpdate(id, updatedProps, options)
    .populate('game')
    .exec()
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

exports.delete = (req, res) => {
  const query = req.query;
  User.remove(query)
    .then(users => res.json(users))
    .catch(err => res.json(err));
};

exports.deleteOne = (req, res) => {
  const query = { _id: req.params.id };
  User.findOneAndRemove(query)
    .populate('game')
    .exec()
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
