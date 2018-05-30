/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSequence = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSequence\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSequenceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSequenceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSequence = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSequence\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSequence = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSequence\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSequence = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSequence\'';
	logger.info(message);
	reject(new Error(message));
});
