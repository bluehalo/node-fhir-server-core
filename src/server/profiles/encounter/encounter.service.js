/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEncounter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEncounter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getEncounterById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getEncounterById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createEncounter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createEncounter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateEncounter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateEncounter\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteEncounter = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteEncounter\'';
	logger.info(message);
	reject(new Error(message));
});
