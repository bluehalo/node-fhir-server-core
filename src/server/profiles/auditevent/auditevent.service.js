/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAuditEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAuditEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAuditEventById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAuditEventById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAuditEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAuditEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAuditEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAuditEvent\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAuditEvent = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAuditEvent\'';
	logger.info(message);
	reject(new Error(message));
});
