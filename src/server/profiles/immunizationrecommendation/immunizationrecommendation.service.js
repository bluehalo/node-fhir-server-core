/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunizationRecommendation = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunizationRecommendation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImmunizationRecommendationById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImmunizationRecommendationById\'';
	logger.info(message);
	reject(new Error(message));
});
