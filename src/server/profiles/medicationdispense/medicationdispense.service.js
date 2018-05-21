/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationDispense = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationDispense\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMedicationDispenseById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMedicationDispenseById\'';
	logger.info(message);
	reject(new Error(message));
});
