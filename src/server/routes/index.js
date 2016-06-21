const userRouter = require('../resources/users/userRouter.js');

module.exports = app => {
  app.use('/api/users', userRouter);
};
