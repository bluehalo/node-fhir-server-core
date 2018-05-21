/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationAdministration = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationAdministration\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationAdministrationById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationAdministrationById\'';
	logger.info(message);
	reject(new Error(message));
});
