/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTestScript = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTestScript\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTestScriptById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTestScriptById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createTestScript = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createTestScript\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateTestScript = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateTestScript\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteTestScript = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteTestScript\'';
	logger.info(message);
	reject(new Error(message));
});
