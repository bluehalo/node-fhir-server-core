/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getImagingManifestById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getImagingManifestById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createImagingManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createImagingManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateImagingManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateImagingManifest\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteImagingManifest = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteImagingManifest\'';
	logger.info(message);
	reject(new Error(message));
});
