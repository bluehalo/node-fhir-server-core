/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEligibilityResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEligibilityResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEligibilityResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEligibilityResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEligibilityResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEligibilityResponse\'';
	logger.info(message);
	reject(new Error(message));
});
