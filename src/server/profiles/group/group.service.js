/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGroupById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGroupById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateGroup\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteGroup = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteGroup\'';
	logger.info(message);
	reject(new Error(message));
});
