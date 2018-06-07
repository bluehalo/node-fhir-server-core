/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCoverage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCoverage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCoverageById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCoverageById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCoverage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCoverage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCoverage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCoverage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCoverage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCoverage\'';
	logger.info(message);
	reject(new Error(message));
});
