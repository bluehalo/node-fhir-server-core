/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getStructureMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getStructureMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getStructureMapById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getStructureMapById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createStructureMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createStructureMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateStructureMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateStructureMap\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteStructureMap = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteStructureMap\'';
	logger.info(message);
	reject(new Error(message));
});
