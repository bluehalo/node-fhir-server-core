/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling observation mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	// reject(new Error(message));
	resolve(23);
});

module.exports.getObservation = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling observation mock service. Did you forget to implement \'getObservation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationById = (req, logger, context) => new Promise((resolve, reject) => {
	console.log(context);
	let message = 'Calling mock service. Did you forget to implement \'getObservationById\'';
	logger.info(message);
	reject(new Error(message));
});
