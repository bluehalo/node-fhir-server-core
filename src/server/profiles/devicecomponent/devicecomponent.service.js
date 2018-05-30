/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceComponent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceComponent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceComponentById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceComponentById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDeviceComponent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDeviceComponent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDeviceComponent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDeviceComponent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDeviceComponent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDeviceComponent\'';
	logger.info(message);
	reject(new Error(message));
});
