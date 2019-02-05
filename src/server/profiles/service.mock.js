const { container } = require('../winston.js');

let logger = container.get('default');

module.exports.search = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'search'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.searchByVersionId = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'searchByVersionId'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.searchById = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'searchById'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.create = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'create'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.update = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'update'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.remove = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'remove'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.history = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'history'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.historyById = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'historyById'.";
		logger.info(message);
		reject(new Error(message));
	});

module.exports.expandById = (_args, _context) =>
	new Promise((resolve, reject) => {
		let message = "Calling mock service. Did you forget to implement 'expandById'.";
		logger.info(message);
		reject(new Error(message));
	});
