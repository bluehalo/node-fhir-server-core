/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCareTeam = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCareTeam\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getCareTeamById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCareTeamById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createCareTeam = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createCareTeam\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateCareTeam = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateCareTeam\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteCareTeam = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteCareTeam\'';
	logger.info(message);
	reject(new Error(message));
});
