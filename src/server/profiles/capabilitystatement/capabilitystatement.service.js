/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCapabilityStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCapabilityStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCapabilityStatementById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCapabilityStatementById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCapabilityStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCapabilityStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCapabilityStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCapabilityStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCapabilityStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCapabilityStatement\'';
	logger.info(message);
	reject(new Error(message));
});
