/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getList = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getList\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getListById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getListById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createList = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createList\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateList = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateList\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteList = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteList\'';
	logger.info(message);
	reject(new Error(message));
});
