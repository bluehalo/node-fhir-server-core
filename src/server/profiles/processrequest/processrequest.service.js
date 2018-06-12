/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcessRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcessRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcessRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcessRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createProcessRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createProcessRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateProcessRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateProcessRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteProcessRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteProcessRequest\'';
	logger.info(message);
	reject(new Error(message));
});
