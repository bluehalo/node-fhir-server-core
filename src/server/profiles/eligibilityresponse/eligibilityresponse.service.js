/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityResponse = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEligibilityResponseById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEligibilityResponseById\'';
	logger.info(message);
	reject(new Error(message));
});
