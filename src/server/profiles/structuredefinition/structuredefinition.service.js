/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getStructureDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getStructureDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getStructureDefinitionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getStructureDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createStructureDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createStructureDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateStructureDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateStructureDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteStructureDefinition = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteStructureDefinition\'';
	logger.info(message);
	reject(new Error(message));
});
