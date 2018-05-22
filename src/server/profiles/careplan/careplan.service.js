/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCarePlan = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCarePlan\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCarePlanById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCarePlanById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCarePlan = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCarePlan\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCarePlan = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCarePlan\'';
	logger.info(message);
	reject(new Error(message));
});
