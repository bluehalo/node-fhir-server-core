/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMessageHeader = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMessageHeader\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getMessageHeaderById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getMessageHeaderById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createMessageHeader = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createMessageHeader\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateMessageHeader = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateMessageHeader\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteMessageHeader = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteMessageHeader\'';
	logger.info(message);
	reject(new Error(message));
});
