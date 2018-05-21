/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingStudy = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingStudy\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingStudyById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingStudyById\'';
	logger.info(message);
	reject(new Error(message));
});
