/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRiskAssessment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRiskAssessment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getRiskAssessmentById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getRiskAssessmentById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createRiskAssessment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createRiskAssessment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateRiskAssessment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateRiskAssessment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteRiskAssessment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteRiskAssessment\'';
	logger.info(message);
	reject(new Error(message));
});
