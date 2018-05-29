/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcedure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcedure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcedureById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcedureById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createProcedure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createProcedure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateProcedure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateProcedure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteProcedure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteProcedure\'';
	logger.info(message);
	reject(new Error(message));
});
