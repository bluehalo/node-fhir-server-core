/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDeviceRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDeviceRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDeviceRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDeviceRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDeviceRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDeviceRequest\'';
	logger.info(message);
	reject(new Error(message));
});
