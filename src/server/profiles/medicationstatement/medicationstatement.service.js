/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationStatementById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationStatementById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedicationStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedicationStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedicationStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedicationStatement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedicationStatement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedicationStatement\'';
	logger.info(message);
	reject(new Error(message));
});
