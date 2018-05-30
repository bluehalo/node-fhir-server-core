/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEnrollmentResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEnrollmentResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEnrollmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEnrollmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEnrollmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEnrollmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEnrollmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEnrollmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});
