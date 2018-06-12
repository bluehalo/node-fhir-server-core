/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getNamingSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getNamingSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getNamingSystemById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getNamingSystemById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createNamingSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createNamingSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateNamingSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateNamingSystem\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteNamingSystem = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteNamingSystem\'';
	logger.info(message);
	reject(new Error(message));
});
