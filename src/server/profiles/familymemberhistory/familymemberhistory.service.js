/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFamilyMemberHistory = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFamilyMemberHistory\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getFamilyMemberHistoryById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getFamilyMemberHistoryById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createFamilyMemberHistory = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createFamilyMemberHistory\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateFamilyMemberHistory = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateFamilyMemberHistory\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteFamilyMemberHistory = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteFamilyMemberHistory\'';
	logger.info(message);
	reject(new Error(message));
});
