/* eslint-disable no-unused-vars */
module.exports.count = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'count\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.search = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'search\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.searchByVersionId = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'searchByVersionId\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.searchById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'searchById\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.create = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'create\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.update = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'update\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.remove = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'remove\' in ProcessRequest service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.history = (args, logger) => new Promise((resolve, reject) => {
    let message = 'Calling mock service. Did you forget to implement \'history\' in ProcessRequest service.';
    logger.info(message);
    reject(new Error(message));
});

module.exports.historyById = (args, logger) => new Promise((resolve, reject) => {
    let message = 'Calling mock service. Did you forget to implement \'historyById\' in ProcessRequest service.';
    logger.info(message);
    reject(new Error(message));
});
