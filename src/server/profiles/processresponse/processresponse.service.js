/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcessResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcessResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcessResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcessResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createProcessResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createProcessResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateProcessResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateProcessResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteProcessResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteProcessResponse\'';
	logger.info(message);
	reject(new Error(message));
});
