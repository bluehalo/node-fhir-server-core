/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunizationRecommendation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunizationRecommendation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunizationRecommendationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunizationRecommendationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createImmunizationRecommendation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createImmunizationRecommendation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateImmunizationRecommendation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateImmunizationRecommendation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteImmunizationRecommendation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteImmunizationRecommendation\'';
	logger.info(message);
	reject(new Error(message));
});
