const logger = require('winston');

exports.handleError = (err, req, res, next) => {
  const { stack, message } = err;
  logger.error(stack);
  res.status(500).json({ error: true, message });
};
