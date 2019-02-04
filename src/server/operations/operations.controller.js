const deprecate = require('../utils/deprecation.notice.js');
const responseUtils = require('../utils/response.utils.js');
const errors = require('../utils/error.utils.js');
const loggers = require('../winston.js');

// TODO: REMOVE: logger in future versions, emit notices for now
let logger = deprecate(
	loggers.get(),
	'Using the logger this way is deprecated. Please see the documentation on ' +
	'BREAKING CHANGES in version 2.0.0 for instructions on how to upgrade.'
);

/**
 * @description Controller for all POST operations
 */
module.exports.operationsPost = function operationsPost({ profile, name }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, resource_id } = req.sanitized_args;
		let resource_body = req.body;
		let args = { id: resource_id, base_version, resource: resource_body };

		service[name](args, req.contexts, logger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for all GET operations
 */
module.exports.operationsGet = function operationsGet({ profile, name }) {
	let { serviceModule: service } = profile;
	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		service[name](req.sanitized_args, req.contexts, logger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
