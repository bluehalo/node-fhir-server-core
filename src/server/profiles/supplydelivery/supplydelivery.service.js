/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyDelivery = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyDelivery\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyDeliveryById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyDeliveryById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSupplyDelivery = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSupplyDelivery\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSupplyDelivery = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSupplyDelivery\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSupplyDelivery = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSupplyDelivery\'';
	logger.info(message);
	reject(new Error(message));
});
