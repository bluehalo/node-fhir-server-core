const { loggers, transports } = require('winston');


/**
* Features
* - make it easy to pass in logging config
* - export multiple loggers
* - export a default logger
* - try not to be too much of a breaking change
*/

/**
* @function add
* @description Expose the winston logger to make it easy to add more loggers
* for the end user
*/
module.exports.add = loggers.add;

/**
* @function get
* @description Retrieve a logger by name, can be one the user created or not
* @param {String} name - Name of the logger
* @return {winston.logger}
*/
module.exports.get = (name = 'default') => loggers.get(name);

/**
* @function initialize
* @description Initialize a default console logger
*/
module.exports.initialize = (config = {}) => {
	loggers.add('default', {
		transports: [
			new transports.Console({
				level: config.level,
				timestamp: true,
				colorize: true,
			})
		]
	});

	return loggers.get();
};
