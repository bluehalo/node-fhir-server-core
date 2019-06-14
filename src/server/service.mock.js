const ServerError = require('./utils/server.error.js');
const { container } = require('./winston.js');

let logger = container.get('default');

const errorDetails = message => ({
	statusCode: 500,
	issue: [
		{
			severity: 'error',
			code: 'internal',
			details: {
				text: `Unexpected: ${message}`,
			},
		},
	],
});

module.exports.search = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'search'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.searchByVersionId = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'searchByVersionId'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.searchById = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'searchById'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.create = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'create'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.update = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'update'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.remove = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'remove'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.patch = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'patch'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.history = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'history'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.historyById = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'historyById'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};

module.exports.expandById = async (_args, _context) => {
	let message = "Calling mock service. Did you forget to implement 'expandById'.";
	logger.info(message);
	throw new ServerError(message, errorDetails(message));
};
