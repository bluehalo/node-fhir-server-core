/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentReconciliation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentReconciliation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentReconciliationById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentReconciliationById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createPaymentReconciliation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPaymentReconciliation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePaymentReconciliation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePaymentReconciliation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.deletePaymentReconciliation = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'deletePaymentReconciliation\'';
	logger.info(message);
	reject(new Error(message));
});
