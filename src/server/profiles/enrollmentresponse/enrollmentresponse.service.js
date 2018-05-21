/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentResponse = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentResponseById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentResponseById\'';
	logger.info(message);
	reject(new Error(message));
});
