/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGraphDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGraphDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGraphDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGraphDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createGraphDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createGraphDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateGraphDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateGraphDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteGraphDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteGraphDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
