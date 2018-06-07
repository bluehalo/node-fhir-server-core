/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getQuestionnaire = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getQuestionnaire\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getQuestionnaireById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getQuestionnaireById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createQuestionnaire = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createQuestionnaire\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateQuestionnaire = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateQuestionnaire\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteQuestionnaire = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteQuestionnaire\'';
	logger.info(message);
	reject(new Error(message));
});
