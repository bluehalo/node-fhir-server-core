const winston = require('winston');
const path = require('path');
const config = require(path.resolve('./src/config/config'));

/**
 * @name exports
 * @summary Application logger. Add more transports as necessary
 */
module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: config.logging.level,
      colorize: true,
      timestamp: true
    })
  ]
});