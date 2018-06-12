/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSearchParameter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSearchParameter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSearchParameterById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSearchParameterById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSearchParameter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSearchParameter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSearchParameter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSearchParameter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSearchParameter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSearchParameter\'';
	logger.info(message);
	reject(new Error(message));
});
