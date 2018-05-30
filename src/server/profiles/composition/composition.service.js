/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getComposition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getComposition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCompositionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCompositionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createComposition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createComposition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateComposition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateComposition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteComposition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteComposition\'';
	logger.info(message);
	reject(new Error(message));
});
