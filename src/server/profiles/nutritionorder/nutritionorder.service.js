/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getNutritionOrder = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getNutritionOrder\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getNutritionOrderById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getNutritionOrderById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createNutritionOrder = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createNutritionOrder\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateNutritionOrder = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateNutritionOrder\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteNutritionOrder = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteNutritionOrder\'';
	logger.info(message);
	reject(new Error(message));
});
