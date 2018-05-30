/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAppointment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAppointment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAppointmentById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAppointmentById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAppointment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAppointment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAppointment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAppointment\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAppointment = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAppointment\'';
	logger.info(message);
	reject(new Error(message));
});
