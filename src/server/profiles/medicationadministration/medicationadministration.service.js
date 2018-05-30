/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationAdministration = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationAdministration\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationAdministrationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationAdministrationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedicationAdministration = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedicationAdministration\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedicationAdministration = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedicationAdministration\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedicationAdministration = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedicationAdministration\'';
	logger.info(message);
	reject(new Error(message));
});
