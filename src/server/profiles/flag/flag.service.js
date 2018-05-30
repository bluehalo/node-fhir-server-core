/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFlag = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFlag\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFlagById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFlagById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createFlag = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createFlag\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateFlag = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateFlag\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteFlag = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteFlag\'';
	logger.info(message);
	reject(new Error(message));
});
