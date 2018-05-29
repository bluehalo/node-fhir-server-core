/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLocation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLocation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLocationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLocationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createLocation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createLocation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateLocation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateLocation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteLocation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteLocation\'';
	logger.info(message);
	reject(new Error(message));
});
