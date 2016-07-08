const authRouter = require('express').Router();
const authController = require('./authController');

authRouter.route('/')
  .post(authController.login)
  .delete(authController.logout);

module.exports = authRouter;
