/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDetectedIssue = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDetectedIssue\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDetectedIssueById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDetectedIssueById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDetectedIssue = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDetectedIssue\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDetectedIssue = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDetectedIssue\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDetectedIssue = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDetectedIssue\'';
	logger.info(message);
	reject(new Error(message));
});
