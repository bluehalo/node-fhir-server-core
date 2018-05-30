/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getResearchStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getResearchStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getResearchStudyById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getResearchStudyById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createResearchStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createResearchStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateResearchStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateResearchStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteResearchStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteResearchStudy\'';
	logger.info(message);
	reject(new Error(message));
});
