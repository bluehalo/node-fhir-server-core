/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEligibilityRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEligibilityRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEligibilityRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEligibilityRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEligibilityRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEligibilityRequest\'';
	logger.info(message);
	reject(new Error(message));
});
