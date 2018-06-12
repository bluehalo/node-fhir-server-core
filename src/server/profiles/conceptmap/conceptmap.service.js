/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConceptMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConceptMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConceptMapById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConceptMapById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createConceptMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createConceptMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateConceptMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateConceptMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteConceptMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteConceptMap\'';
	logger.info(message);
	reject(new Error(message));
});
