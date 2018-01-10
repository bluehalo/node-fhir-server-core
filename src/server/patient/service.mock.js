module.exports.getCount = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPatient = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPatient\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPatientById = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPatientById\'';
	logger.info(message);
	reject(new Error(message));
});
