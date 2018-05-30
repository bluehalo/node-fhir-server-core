/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getHealthcareService = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getHealthcareService\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getHealthcareServiceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getHealthcareServiceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createHealthcareService = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createHealthcareService\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateHealthcareService = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateHealthcareService\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteHealthcareService = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteHealthcareService\'';
	logger.info(message);
	reject(new Error(message));
});
