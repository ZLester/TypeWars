const User = require('../users/User');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const query = { username };
  User.findOne(query)
    .then(user => {
      if (!user) {
        throw new Error('Invalid Username or Password');
      }
      return user.comparePasswords(password);
    })
    .then(match => {
      if (!match) {
        throw new Error('Invalid Username or Password');
      }
      res.status(201).json({ message: 'logged in placeholder'});
    })
    .catch(err => {
      res.status(401).json({ error: err.toString() });
    });
};

exports.logout = (req, res) => {

};