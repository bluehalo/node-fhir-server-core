/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDiagnosticReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDiagnosticReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDiagnosticReportById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDiagnosticReportById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDiagnosticReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDiagnosticReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDiagnosticReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDiagnosticReport\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDiagnosticReport = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDiagnosticReport\'';
	logger.info(message);
	reject(new Error(message));
});
