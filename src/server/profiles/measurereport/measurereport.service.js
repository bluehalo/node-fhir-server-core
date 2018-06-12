/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMeasureReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMeasureReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMeasureReportById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMeasureReportById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMeasureReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMeasureReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMeasureReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMeasureReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMeasureReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMeasureReport\'';
	logger.info(message);
	reject(new Error(message));
});
