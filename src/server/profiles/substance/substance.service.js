/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSubstance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSubstance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSubstanceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSubstanceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSubstance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSubstance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSubstance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSubstance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSubstance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSubstance\'';
	logger.info(message);
	reject(new Error(message));
});
