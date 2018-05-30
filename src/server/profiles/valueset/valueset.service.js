/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getValueSet = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getValueSet\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getValueSetById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getValueSetById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createValueSet = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createValueSet\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateValueSet = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateValueSet\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteValueSet = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteValueSet\'';
	logger.info(message);
	reject(new Error(message));
});
