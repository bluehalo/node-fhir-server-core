/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceRequest = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceRequestById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceRequestById\'';
	logger.info(message);
	reject(new Error(message));
});
