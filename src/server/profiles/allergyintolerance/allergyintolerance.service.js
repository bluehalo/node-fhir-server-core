/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntolerance = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntoleranceById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAllergyIntoleranceById\'';
	logger.info(message);
	reject(new Error(message));
});
