/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOrganization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOrganization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOrganizationById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOrganizationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createOrganization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createOrganization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateOrganization = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateOrganization\'';
	logger.info(message);
	reject(new Error(message));
});
