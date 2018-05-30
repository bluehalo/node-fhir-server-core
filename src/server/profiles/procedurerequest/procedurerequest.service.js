/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcedureRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcedureRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getProcedureRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getProcedureRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createProcedureRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createProcedureRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateProcedureRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateProcedureRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteProcedureRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteProcedureRequest\'';
	logger.info(message);
	reject(new Error(message));
});
