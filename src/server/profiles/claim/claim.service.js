/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClaim = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClaim\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClaimById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClaimById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createClaim = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createClaim\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateClaim = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateClaim\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteClaim = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteClaim\'';
	logger.info(message);
	reject(new Error(message));
});
