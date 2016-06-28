const gameRouter = require('express').Router();
const gameController = require('./gameController');

gameRouter.route('/')
  .post(gameController.createOne)
  .get(gameController.retrieve)
  .delete(gameController.delete);

gameRouter.route('/:id')
  .get(gameController.retrieveOne)
  .put(gameController.updateOne)
  .delete(gameController.deleteOne);

module.exports = gameRouter;
