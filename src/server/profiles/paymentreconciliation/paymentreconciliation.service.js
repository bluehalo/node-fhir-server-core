/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentReconciliation = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentReconciliation\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPaymentReconciliationById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPaymentReconciliationById\'';
	logger.info(message);
	reject(new Error(message));
});
