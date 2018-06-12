/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProvenance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProvenance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProvenanceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProvenanceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createProvenance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createProvenance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateProvenance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateProvenance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteProvenance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteProvenance\'';
	logger.info(message);
	reject(new Error(message));
});
