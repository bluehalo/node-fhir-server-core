/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBinary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBinary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBinaryById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBinaryById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createBinary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createBinary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateBinary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateBinary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteBinary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteBinary\'';
	logger.info(message);
	reject(new Error(message));
});
