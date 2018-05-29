/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOrganization = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOrganization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getOrganizationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getOrganizationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createOrganization = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createOrganization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateOrganization = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateOrganization\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteOrganization = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteOrganization\'';
	logger.info(message);
	reject(new Error(message));
});
