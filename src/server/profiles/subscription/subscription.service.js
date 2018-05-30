/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSubscription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSubscription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSubscriptionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSubscriptionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSubscription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSubscription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSubscription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSubscription\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSubscription = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSubscription\'';
	logger.info(message);
	reject(new Error(message));
});
