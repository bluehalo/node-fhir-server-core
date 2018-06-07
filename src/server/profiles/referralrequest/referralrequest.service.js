/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getReferralRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getReferralRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getReferralRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getReferralRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createReferralRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createReferralRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateReferralRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateReferralRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteReferralRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteReferralRequest\'';
	logger.info(message);
	reject(new Error(message));
});
