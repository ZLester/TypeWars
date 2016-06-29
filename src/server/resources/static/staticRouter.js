const { STATIC_PATH } = require('../../config');

const serveIndex = (req, res) => {
  res.sendFile(STATIC_PATH + '/index.html');
};

module.exports = {
  serveIndex,
};
