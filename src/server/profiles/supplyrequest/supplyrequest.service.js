/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSupplyRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSupplyRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSupplyRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSupplyRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSupplyRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSupplyRequest\'';
	logger.info(message);
	reject(new Error(message));
});
