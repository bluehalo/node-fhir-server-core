/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBodySite = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBodySite\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getBodySiteById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getBodySiteById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createBodySite = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createBodySite\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateBodySite = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateBodySite\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteBodySite = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteBodySite\'';
	logger.info(message);
	reject(new Error(message));
});
