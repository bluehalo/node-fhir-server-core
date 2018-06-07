/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getQuestionnaireResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getQuestionnaireResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getQuestionnaireResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getQuestionnaireResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createQuestionnaireResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createQuestionnaireResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateQuestionnaireResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateQuestionnaireResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteQuestionnaireResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteQuestionnaireResponse\'';
	logger.info(message);
	reject(new Error(message));
});
