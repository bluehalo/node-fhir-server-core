/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMessageDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMessageDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMessageDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMessageDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMessageDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMessageDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMessageDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMessageDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMessageDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMessageDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
