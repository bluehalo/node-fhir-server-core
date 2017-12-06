const winston = require('winston');

/**
 * @name exports
 * @summary Application logger. Add more transports as necessary
 */
module.exports = function (loggerConfig) {
	return new winston.Logger({
		transports: [
			new winston.transports.Console({
				level: loggerConfig.level,
				colorize: true,
				timestamp: true
			})
		]
	});
};
