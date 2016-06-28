const userRouter = require('../resources/users/userRouter.js');
const gameRouter = require('../resources/games/gameRouter.js');

module.exports = app => {
  app.use('/api/users', userRouter);
  app.use('/api/games', gameRouter);
};
