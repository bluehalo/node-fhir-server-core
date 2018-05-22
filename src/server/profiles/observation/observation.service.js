/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservation = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createObservation = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createObservation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateObservation = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateObservation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteObservation = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteObservation\'';
	logger.info(message);
	reject(new Error(message));
});
