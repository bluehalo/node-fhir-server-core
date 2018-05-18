/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationRequest = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationRequestById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedicationRequest = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedicationRequest = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});
