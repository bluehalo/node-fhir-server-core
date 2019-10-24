const { Container, transports } = require('winston');

/**
 * Features
 * - make it easy to pass in logging config
 * - export multiple loggers
 * - export a default logger
 * - try not to be too much of a breaking change
 * - expose core container to allow for use in different implementations
 */

const container = new Container();

/**
 * @description Logging container that can be used to modify any loggers
 * availablie in the current application
 */

/**
 * @function get
 * @description Retrieve a logger by name, same as container.get except with a
 * default value applied to it
 * @param {String} name - Name of the logger
 * @param {Object} options - Options for the logger, this is also an alias for
 * adding a logger
 * @return {winston.logger}
 */
const get = (name = 'default', options) => container.get(name, options);

/**
 * @function initialize
 * @description Initialize a default console logger
 */
const initialize = (config = {}) => {
	let transport = new transports.Console({
		level: config.level,
		timestamp: true,
		colorize: true,
	});
	// If we already have a logger by the provided default name, make sure it
	// has a console transport added. This can happen when someone accesses the
	// logger before calling initialize
	if (container.has('default')) {
		let logger = container.get('default');
		// Only add the console logger if none is present, technically
		if (logger.transports.length === 0) {
			logger.add(transport);
		}
	} else {
		container.add('default', {
			transports: [transport],
		});
	}
};

module.exports = {
	container,
	get,
	initialize,
	transports,
};
