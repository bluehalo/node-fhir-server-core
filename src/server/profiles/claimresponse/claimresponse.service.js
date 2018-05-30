/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClaimResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClaimResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClaimResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClaimResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createClaimResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createClaimResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateClaimResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateClaimResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteClaimResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteClaimResponse\'';
	logger.info(message);
	reject(new Error(message));
});
