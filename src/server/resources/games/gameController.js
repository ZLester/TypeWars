const Game = require('./Game');

exports.validateId = (req, res, next) => {
  const id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return next(new Error('Invalid Game ID'));
  }
  next();
};

exports.createOne = (req, res, next) => {
  const newGame = req.body;
  if (req.user) {
    newGame.player = req.user._id;
  }
  Game.create(newGame)
    .then(game => res.json(game))
    .catch(err => next(err));
};

exports.retrieve = (req, res, next) => {
  const query = req.query;
  Game.find(query)
    .populate('player')
    .exec()
    .then(games => res.json(games))
    .catch(err => next(err));
};

exports.retrieveOne = (req, res, next) => {
  const id = req.params.id;
  Game.findById(id)
    .populate('player')
    .exec()
    .then(game => res.json(game))
    .catch(err => next(err));
};

exports.updateOne = (req, res, next) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { upsert: true };
  Game.findByIdAndUpdate(id, updatedProps, options)
    .populate('player')
    .exec()
    .then(game => res.json(game))
    .catch(err => next(err));
};

exports.delete = (req, res, next) => {
  const query = req.query;
  Game.remove(query)
    .then(games => res.status(201).json(games))
    .catch(err => next(err));
};

exports.deleteOne = (req, res, next) => {
  const id = req.params.id;
  Game.findByIdAndRemove(id)
    .populate('player')
    .exec()
    .then(game => res.status(201).json(game))
    .catch(err => next(err));
};
