/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSlot = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSlot\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getSlotById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getSlotById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createSlot = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createSlot\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateSlot = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateSlot\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteSlot = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteSlot\'';
	logger.info(message);
	reject(new Error(message));
});
