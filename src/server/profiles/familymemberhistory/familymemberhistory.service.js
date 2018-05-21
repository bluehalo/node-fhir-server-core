/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFamilyMemberHistory = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFamilyMemberHistory\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFamilyMemberHistoryById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFamilyMemberHistoryById\'';
	logger.info(message);
	reject(new Error(message));
});
