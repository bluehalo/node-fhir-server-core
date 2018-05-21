/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExplanationOfBenefit = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExplanationOfBenefit\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExplanationOfBenefitById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExplanationOfBenefitById\'';
	logger.info(message);
	reject(new Error(message));
});
