const winston = require('winston');

/**
 * @name exports
 * @summary Application logger. Add more transports as necessary
 */
module.exports = function(config = {}) {
	return new winston.Logger({
		transports: [
			new winston.transports.Console({
				level: config.level,
				colorize: true,
				timestamp: true,
			}),
		],
	});
};
