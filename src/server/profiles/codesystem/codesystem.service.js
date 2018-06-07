/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCodeSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCodeSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCodeSystemById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCodeSystemById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCodeSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCodeSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCodeSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCodeSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCodeSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCodeSystem\'';
	logger.info(message);
	reject(new Error(message));
});
