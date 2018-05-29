/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCondition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCondition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConditionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConditionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCondition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCondition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCondition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCondition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCondition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCondition\'';
	logger.info(message);
	reject(new Error(message));
});
