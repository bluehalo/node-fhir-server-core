module.exports.authorization = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'authorization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.token = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'token\'';
	logger.info(message);
	reject(new Error(message));
});
