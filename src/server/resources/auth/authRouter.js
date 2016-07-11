const authRouter = require('express').Router();
const authController = require('./authController');
const Auth = require('./Auth');
authRouter.route('/')
  .post(Auth.verifyUser(), authController.login)
  .delete(Auth.destroyUser(), authController.logout);

module.exports = authRouter;
