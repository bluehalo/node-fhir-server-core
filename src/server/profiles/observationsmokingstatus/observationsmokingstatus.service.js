/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationSmokingStatus = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationSmokingStatus\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationSmokingStatusById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationSmokingStatusById\'';
	logger.info(message);
	reject(new Error(message));
});
