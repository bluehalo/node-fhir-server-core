/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunizationById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunizationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createImmunization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createImmunization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateImmunization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateImmunization\'';
	logger.info(message);
	reject(new Error(message));
});
