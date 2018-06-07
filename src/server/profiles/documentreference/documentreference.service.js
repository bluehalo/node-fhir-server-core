/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDocumentReference = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDocumentReference\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDocumentReferenceById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDocumentReferenceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDocumentReference = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDocumentReference\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDocumentReference = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDocumentReference\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDocumentReference = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDocumentReference\'';
	logger.info(message);
	reject(new Error(message));
});
