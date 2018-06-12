/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentNotice = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentNotice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentNoticeById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentNoticeById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPaymentNotice = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPaymentNotice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePaymentNotice = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePaymentNotice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePaymentNotice = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePaymentNotice\'';
	logger.info(message);
	reject(new Error(message));
});
