/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	// reject(new Error(message));
	resolve(12);
});

module.exports.getCondition = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCondition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConditionById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConditionById\'';
	logger.info(message);
	reject(new Error(message));
});
