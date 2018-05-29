/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});
