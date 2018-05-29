/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGoal = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGoal\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getGoalById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getGoalById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createGoal = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createGoal\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateGoal = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateGoal\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteGoal = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteGoal\'';
	logger.info(message);
	reject(new Error(message));
});
