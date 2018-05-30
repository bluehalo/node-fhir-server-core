/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDataElement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDataElement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDataElementById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDataElementById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDataElement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDataElement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDataElement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDataElement\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDataElement = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDataElement\'';
	logger.info(message);
	reject(new Error(message));
});
