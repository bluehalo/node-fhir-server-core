/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAdverseEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAdverseEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAdverseEventById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAdverseEventById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAdverseEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAdverseEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAdverseEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAdverseEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAdverseEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAdverseEvent\'';
	logger.info(message);
	reject(new Error(message));
});
