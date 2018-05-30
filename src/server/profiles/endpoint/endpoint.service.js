/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEndPoint = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEndPoint\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEndPointById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEndPointById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEndPoint = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEndPoint\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEndPoint = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEndPoint\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEndPoint = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEndPoint\'';
	logger.info(message);
	reject(new Error(message));
});
