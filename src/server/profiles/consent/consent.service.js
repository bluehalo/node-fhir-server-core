/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConsent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConsent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getConsentById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getConsentById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createConsent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createConsent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateConsent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateConsent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteConsent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteConsent\'';
	logger.info(message);
	reject(new Error(message));
});
