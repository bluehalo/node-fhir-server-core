/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyDelivery = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyDelivery\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSupplyDeliveryById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSupplyDeliveryById\'';
	logger.info(message);
	reject(new Error(message));
});
