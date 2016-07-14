const userRouter = require('express').Router();
const userController = require('./userController');
const { validateId } = require('./userUtils');

userRouter.param('id', validateId);

userRouter.route('/')
  .post(userController.createOne)
  .get(userController.retrieve)
  .delete(userController.delete);

userRouter.route('/:id')
  .get(userController.retrieveOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

userRouter.route('/me')
  .get(userController.retrieveCurrent);

module.exports = userRouter;
