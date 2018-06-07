/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceMetric = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceMetric\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceMetricById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceMetricById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDeviceMetric = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDeviceMetric\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDeviceMetric = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDeviceMetric\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDeviceMetric = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDeviceMetric\'';
	logger.info(message);
	reject(new Error(message));
});
