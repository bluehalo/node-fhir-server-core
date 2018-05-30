/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSpecimen = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSpecimen\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSpecimenById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSpecimenById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSpecimen = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSpecimen\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSpecimen = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSpecimen\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSpecimen = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSpecimen\'';
	logger.info(message);
	reject(new Error(message));
});
