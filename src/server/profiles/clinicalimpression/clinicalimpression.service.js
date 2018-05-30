/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClinicalImpression = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClinicalImpression\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getClinicalImpressionById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getClinicalImpressionById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createClinicalImpression = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createClinicalImpression\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateClinicalImpression = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateClinicalImpression\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteClinicalImpression = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteClinicalImpression\'';
	logger.info(message);
	reject(new Error(message));
});
