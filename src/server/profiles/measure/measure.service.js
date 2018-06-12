/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMeasure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMeasure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMeasureById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMeasureById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMeasure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMeasure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMeasure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMeasure\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMeasure = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMeasure\'';
	logger.info(message);
	reject(new Error(message));
});
