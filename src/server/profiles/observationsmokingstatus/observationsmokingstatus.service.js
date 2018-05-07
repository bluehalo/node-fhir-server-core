/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationSmokingStatus = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationSmokingStatus\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationSmokingStatusById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationSmokingStatusById\'';
	logger.info(message);
	reject(new Error(message));
});
