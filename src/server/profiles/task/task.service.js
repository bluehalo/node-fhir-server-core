/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTask = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTask\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getTaskById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getTaskById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createTask = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createTask\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateTask = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateTask\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteTask = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteTask\'';
	logger.info(message);
	reject(new Error(message));
});
