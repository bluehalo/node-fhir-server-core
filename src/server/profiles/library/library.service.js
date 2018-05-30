/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLibrary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLibrary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLibraryById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLibraryById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createLibrary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createLibrary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateLibrary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateLibrary\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteLibrary = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteLibrary\'';
	logger.info(message);
	reject(new Error(message));
});
