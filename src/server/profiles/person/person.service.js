/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPersonById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPersonById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePerson\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePerson = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePerson\'';
	logger.info(message);
	reject(new Error(message));
});
