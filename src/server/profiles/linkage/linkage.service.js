/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLinkage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLinkage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getLinkageById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getLinkageById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createLinkage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createLinkage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateLinkage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateLinkage\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteLinkage = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteLinkage\'';
	logger.info(message);
	reject(new Error(message));
});
