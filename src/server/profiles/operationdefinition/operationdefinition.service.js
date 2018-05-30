/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOperationDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOperationDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOperationDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOperationDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createOperationDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createOperationDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateOperationDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateOperationDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteOperationDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteOperationDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
