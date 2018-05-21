/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEpisodeOfCare = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEpisodeOfCare\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEpisodeOfCareById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEpisodeOfCareById\'';
	logger.info(message);
	reject(new Error(message));
});
