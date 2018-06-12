/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAccount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAccount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAccountById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAccountById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAccount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAccount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAccount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAccount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAccount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAccount\'';
	logger.info(message);
	reject(new Error(message));
});
