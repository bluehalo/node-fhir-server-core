const responseUtils = require('../utils/response.utils.js');
const errors = require('../utils/error.utils.js');
const { container } = require('../winston.js');

let logger = container.get('default');

/**
 * @description Controller for all POST operations
 */
module.exports.operationsPost = function operationsPost({ profile, name, logger: deprecatedLogger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, resource_id } = req.sanitized_args;
		let resource_body = req.body;
		let args = { id: resource_id, base_version, resource: resource_body };

		service[name](args, req.contexts, deprecatedLogger)
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
module.exports.operationsGet = function operationsGet({ profile, name, logger: deprecatedLogger }) {
	let { serviceModule: service } = profile;
	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		service[name](req.sanitized_args, req.contexts, deprecatedLogger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
