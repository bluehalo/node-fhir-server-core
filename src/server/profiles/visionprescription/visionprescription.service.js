/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getVisionPrescription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getVisionPrescription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getVisionPrescriptionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getVisionPrescriptionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createVisionPrescription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createVisionPrescription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateVisionPrescription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateVisionPrescription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteVisionPrescription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteVisionPrescription\'';
	logger.info(message);
	reject(new Error(message));
});
