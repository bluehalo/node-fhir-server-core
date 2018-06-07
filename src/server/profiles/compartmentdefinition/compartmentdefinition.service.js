/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCompartmentDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCompartmentDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCompartmentDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCompartmentDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCompartmentDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCompartmentDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCompartmentDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCompartmentDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCompartmentDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCompartmentDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
