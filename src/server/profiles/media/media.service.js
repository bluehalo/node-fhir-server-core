/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedia = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedia\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMediaById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMediaById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedia = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedia\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedia = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedia\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedia = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedia\'';
	logger.info(message);
	reject(new Error(message));
});
