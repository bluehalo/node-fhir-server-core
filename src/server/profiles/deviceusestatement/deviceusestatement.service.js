/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceUseStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceUseStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceUseStatementById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceUseStatementById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDeviceUseStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDeviceUseStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDeviceUseStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDeviceUseStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDeviceUseStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDeviceUseStatement\'';
	logger.info(message);
	reject(new Error(message));
});
