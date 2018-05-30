/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getContract = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getContract\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getContractById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getContractById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createContract = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createContract\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateContract = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateContract\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteContract = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteContract\'';
	logger.info(message);
	reject(new Error(message));
});
