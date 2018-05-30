/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPractitionerRole = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPractitionerRole\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPractitionerRoleById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPractitionerRoleById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPractitionerRole = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPractitionerRole\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePractitionerRole = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePractitionerRole\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePractitionerRole = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePractitionerRole\'';
	logger.info(message);
	reject(new Error(message));
});
