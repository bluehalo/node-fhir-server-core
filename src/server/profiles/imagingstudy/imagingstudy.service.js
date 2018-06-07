/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingStudyById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingStudyById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createImagingStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createImagingStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateImagingStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateImagingStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteImagingStudy = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteImagingStudy\'';
	logger.info(message);
	reject(new Error(message));
});
