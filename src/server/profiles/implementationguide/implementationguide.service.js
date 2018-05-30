/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImplementationGuide = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImplementationGuide\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImplementationGuideById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImplementationGuideById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createImplementationGuide = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createImplementationGuide\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateImplementationGuide = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateImplementationGuide\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteImplementationGuide = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteImplementationGuide\'';
	logger.info(message);
	reject(new Error(message));
});
