const { STATIC_PATH } = require('../../config');

exports.serveIndex = (req, res) => {
  res.sendFile(`${STATIC_PATH}/index.html`);
};
