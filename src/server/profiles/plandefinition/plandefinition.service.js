/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPlanDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPlanDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPlanDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPlanDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPlanDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPlanDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePlanDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePlanDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePlanDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePlanDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
