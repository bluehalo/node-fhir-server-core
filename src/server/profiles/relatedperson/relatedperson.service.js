/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRelatedPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRelatedPerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRelatedPersonById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRelatedPersonById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createRelatedPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createRelatedPerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateRelatedPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateRelatedPerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteRelatedPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteRelatedPerson\'';
	logger.info(message);
	reject(new Error(message));
});
