/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEnrollmentRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEnrollmentRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEnrollmentRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEnrollmentRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEnrollmentRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEnrollmentRequest\'';
	logger.info(message);
	reject(new Error(message));
});
