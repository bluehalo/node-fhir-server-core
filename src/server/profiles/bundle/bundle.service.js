/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBundle = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBundle\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBundleById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBundleById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createBundle = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createBundle\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateBundle = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateBundle\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteBundle = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteBundle\'';
	logger.info(message);
	reject(new Error(message));
});
