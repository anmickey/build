const APIError = require('../errors/AppError');
const logger = require('../logger');

// eslint-disable-next-line no-unused-vars
module.exports = (err, _, res, next) => {
  logger.error(err.message);

  if (err instanceof APIError) {
    throw res.status(err.status).json({ message: err.message });
  }

  throw res.status(500).json({ message: 'unexpected error' });
};
