/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCommunicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCommunicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCommunicationRequestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCommunicationRequestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCommunicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCommunicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCommunicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCommunicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCommunicationRequest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCommunicationRequest\'';
	logger.info(message);
	reject(new Error(message));
});
