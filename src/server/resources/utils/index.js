const logger = require('winston');
const { STATIC_PATH } = require('../../config');

exports.serveIndex = (req, res) => {
  res.sendFile(`${STATIC_PATH}/index.html`);
};

exports.handleError = (err, req, res, next) => {
  const { stack, message } = err;
  logger.error(stack);
  res.status(500).json({ error: true, message });
};
