/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedication = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMedication = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMedication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMedication = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMedication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMedication = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMedication\'';
	logger.info(message);
	reject(new Error(message));
});
