/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCompartmentDefinition = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCompartmentDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCompartmentDefinitionById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCompartmentDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});
