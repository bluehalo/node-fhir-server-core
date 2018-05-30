/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBasic = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBasic\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBasicById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBasicById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createBasic = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createBasic\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateBasic = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateBasic\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteBasic = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteBasic\'';
	logger.info(message);
	reject(new Error(message));
});
