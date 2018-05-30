/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getResearchSubject = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getResearchSubject\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getResearchSubjectById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getResearchSubjectById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createResearchSubject = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createResearchSubject\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateResearchSubject = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateResearchSubject\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteResearchSubject = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteResearchSubject\'';
	logger.info(message);
	reject(new Error(message));
});
