/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExplanationOfBenefit = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExplanationOfBenefit\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getExplanationOfBenefitById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getExplanationOfBenefitById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createExplanationOfBenefit = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createExplanationOfBenefit\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateExplanationOfBenefit = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateExplanationOfBenefit\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteExplanationOfBenefit = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteExplanationOfBenefit\'';
	logger.info(message);
	reject(new Error(message));
});
