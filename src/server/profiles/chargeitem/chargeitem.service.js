/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getChargeItem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getChargeItem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getChargeItemById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getChargeItemById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createChargeItem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createChargeItem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateChargeItem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateChargeItem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteChargeItem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteChargeItem\'';
	logger.info(message);
	reject(new Error(message));
});
