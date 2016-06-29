const userRouter = require('../resources/users/userRouter.js');
const gameRouter = require('../resources/games/gameRouter.js');
const { serveIndex } = require('../resources/static/staticRouter.js');

module.exports = (app, express) => {
  app.use('/api/users', userRouter);
  app.use('/api/games', gameRouter);
  app.get('*', serveIndex);
};
