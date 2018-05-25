/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPractitioner = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPractitioner\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPractitionerById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPractitionerById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPractitioner = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPractitioner\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePractitioner = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePractitioner\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePractitioner = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePractitioner\'';
	logger.info(message);
	reject(new Error(message));
});
