/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGuidanceResponse = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGuidanceResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGuidanceResponseById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGuidanceResponseById\'';
	logger.info(message);
	reject(new Error(message));
});
