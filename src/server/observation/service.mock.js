module.exports.getCount = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling observation mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservation = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling observation mock service. Did you forget to implement \'getObservation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getObservationByID = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getObservationById\'';
	logger.info(message);
	reject(new Error(message));
});
