/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEpisodeOfCare = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEpisodeOfCare\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEpisodeOfCareById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEpisodeOfCareById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEpisodeOfCare = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEpisodeOfCare\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEpisodeOfCare = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEpisodeOfCare\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEpisodeOfCare = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEpisodeOfCare\'';
	logger.info(message);
	reject(new Error(message));
});
