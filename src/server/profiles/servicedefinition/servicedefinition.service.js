/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getServiceDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getServiceDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getServiceDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getServiceDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createServiceDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createServiceDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateServiceDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateServiceDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteServiceDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteServiceDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
