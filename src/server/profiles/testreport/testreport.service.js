/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTestReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTestReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTestReportById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTestReportById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createTestReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createTestReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateTestReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateTestReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteTestReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteTestReport\'';
	logger.info(message);
	reject(new Error(message));
});
