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
    .then(users => res.json(users))
    .catch(err => res.json(err));
};

exports.retrieveOne = (req, res) => {
  const query = { _id: req.params.id };
  User.findOne(query)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

exports.updateOne = (req, res) => {
  const query = { _id: req.params.id };
  const updatedProps = req.body;
  const options = { new: true, upsert: true };
  User.findOneAndUpdate(query, updatedProps, options)
    .then(user => res.json(user))
    .catch(err => res.json(err))
};

exports.delete = (req, res) => {
  const query = req.query;
  User.remove(query)
    .then(users => res.json(users))
    .catch(err => res.json(err));
}

exports.deleteOne = (req, res) => {
  const query = { _id: req.params.id};
  User.findOneAndRemove(query)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
