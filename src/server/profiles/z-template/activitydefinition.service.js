/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getActivityDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getActivityDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getActivityDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getActivityDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createActivityDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createActivityDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateActivityDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateActivityDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteActivityDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteActivityDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
