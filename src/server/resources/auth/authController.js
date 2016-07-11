const Auth = require('./Auth');

exports.login = (req, res) => {
  const token = Auth.signToken(req.user._id);
  res.json({ token });
};

exports.logout = (req, res) => {
  res.json({ token: null });
};
