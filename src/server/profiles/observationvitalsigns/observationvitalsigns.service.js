/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	// reject(new Error(message));
	resolve(12);
});

module.exports.getObservationVitalSigns = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationVitalSigns\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationVitalSignsById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationVitalSignsById\'';
	logger.info(message);
	reject(new Error(message));
});
