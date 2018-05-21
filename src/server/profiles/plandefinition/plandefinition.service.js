/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPlanDefinition = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPlanDefinition\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPlanDefinitionById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPlanDefinitionById\'';
	logger.info(message);
	reject(new Error(message));
});
