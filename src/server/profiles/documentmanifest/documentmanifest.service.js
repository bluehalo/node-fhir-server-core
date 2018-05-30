/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDocumentManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDocumentManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDocumentManifestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDocumentManifestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDocumentManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDocumentManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDocumentManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDocumentManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteDocumentManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteDocumentManifest\'';
	logger.info(message);
	reject(new Error(message));
});
