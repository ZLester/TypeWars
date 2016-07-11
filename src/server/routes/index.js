const authRouter = require('../resources/auth/authRouter.js');
const userRouter = require('../resources/users/userRouter.js');
const gameRouter = require('../resources/games/gameRouter.js');
const { serveIndex, handleError } = require('../resources/utils');

module.exports = app => {
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/games', gameRouter);
  app.get('*', serveIndex);
  app.use(handleError);
};
