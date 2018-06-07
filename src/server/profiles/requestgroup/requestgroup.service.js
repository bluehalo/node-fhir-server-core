/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRequestGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRequestGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRequestGroupById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRequestGroupById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createRequestGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createRequestGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateRequestGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateRequestGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteRequestGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteRequestGroup\'';
	logger.info(message);
	reject(new Error(message));
});
