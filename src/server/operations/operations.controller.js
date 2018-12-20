const responseUtils = require('../utils/response.utils');
const errors = require('../utils/error.utils');

/**
 * @description Controller for all POST operations
 */
module.exports.operationsPost = function operationsPost({ profile, logger, funcName }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, resource_id } = req.sanitized_args;
		let resource_body = req.body;
		let args = { id: resource_id, base_version, resource: resource_body };

		service[funcName](args, req.contexts, logger)
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
module.exports.operationsGet = function operationsGet({ profile, logger, funcName }) {
	let { serviceModule: service } = profile;
	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		service[funcName](req.sanitized_args, req.contexts, logger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
