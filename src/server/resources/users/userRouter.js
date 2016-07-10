const userRouter = require('express').Router();
const userController = require('./userController');

userRouter.param('id', userController.validateId);

userRouter.route('/')
  .post(userController.createOne)
  .get(userController.retrieve)
  .delete(userController.delete);

userRouter.route('/:id')
  .get(userController.retrieveOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = userRouter;
