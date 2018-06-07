/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationDispense = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationDispense\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationDispenseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationDispenseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedicationDispense = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedicationDispense\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedicationDispense = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedicationDispense\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedicationDispense = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedicationDispense\'';
	logger.info(message);
	reject(new Error(message));
});
