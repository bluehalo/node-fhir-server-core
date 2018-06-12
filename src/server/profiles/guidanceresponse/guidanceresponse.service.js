/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGuidanceResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGuidanceResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGuidanceResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGuidanceResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createGuidanceResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createGuidanceResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateGuidanceResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateGuidanceResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteGuidanceResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteGuidanceResponse\'';
	logger.info(message);
	reject(new Error(message));
});
