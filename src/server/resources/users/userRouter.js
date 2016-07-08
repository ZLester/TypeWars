const userRouter = require('express').Router();
const userController = require('./userController');


// api/users/
userRouter.route('/')
  .post(userController.createOne)
  .get(function (req, res) {
    const query = req.query;
    User.find(query)
      .then(users => res.json(users))
      .catch(err => res.json(err));
  })
  .delete(userController.delete);

// api/users/1
userRouter.route('/:id')
  .get(userController.retrieveOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = userRouter;
