/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAppointmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAppointmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAppointmentResponseById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAppointmentResponseById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createAppointmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createAppointmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateAppointmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateAppointmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deleteAppointmentResponse = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deleteAppointmentResponse\'';
	logger.info(message);
	reject(new Error(message));
});
