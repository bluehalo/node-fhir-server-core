/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExpansionProfile = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExpansionProfile\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExpansionProfileById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExpansionProfileById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createExpansionProfile = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createExpansionProfile\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateExpansionProfile = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateExpansionProfile\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteExpansionProfile = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteExpansionProfile\'';
	logger.info(message);
	reject(new Error(message));
});
