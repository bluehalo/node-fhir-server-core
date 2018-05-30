/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntolerance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntoleranceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAllergyIntoleranceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAllergyIntolerance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAllergyIntolerance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAllergyIntolerance = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});
