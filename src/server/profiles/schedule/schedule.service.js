/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSchedule = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSchedule\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getScheduleById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getScheduleById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSchedule = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSchedule\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSchedule = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSchedule\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSchedule = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSchedule\'';
	logger.info(message);
	reject(new Error(message));
});
