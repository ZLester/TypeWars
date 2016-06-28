const Game = require('./Game');

exports.createOne = (req, res) => {
  const newGame = req.body;
  Game.create(newGame)
    .then(game => res.json(game))
    .catch(err => res.json(err));
};

exports.retrieve = (req, res) => {
  const query = req.query;
  Game.find(query)
    .then(games => res.json(games))
    .catch(err => res.json(err));
};

exports.retrieveOne = (req, res) => {
  const query = { _id: req.params.id };
  Game.findOne(query)
    .then(game => res.json(game))
    .catch(err => res.json(err));
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { new: true, upsert: true };
  Game.findByIdAndUpdate(id, updatedProps, options)
    .then(game => res.json(game))
    .catch(err => res.json(err))
};

exports.delete = (req, res) => {
  const query = req.query;
  Game.remove(query)
    .then(games => res.json(games))
    .catch(err => res.json(err));
}

exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Game.findOneByIdAndRemove(id)
    .then(game => res.json(game))
    .catch(err => res.json(err));
};
