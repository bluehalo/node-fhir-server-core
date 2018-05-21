/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentRequest = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentRequestById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentRequestById\'';
	logger.info(message);
	reject(new Error(message));
});
