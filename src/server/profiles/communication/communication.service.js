/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCommunication = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCommunication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCommunicationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCommunicationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCommunication = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCommunication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCommunication = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCommunication\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCommunication = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCommunication\'';
	logger.info(message);
	reject(new Error(message));
});
