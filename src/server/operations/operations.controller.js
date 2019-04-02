const handler = require('@asymmetrik/fhir-response-util');

/**
 * @description Controller for all POST operations
 */
module.exports.operationsPost = function operationsPost({ profile, name, logger: deprecatedLogger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, resource_id } = req.sanitized_args;
		let resource_body = req.body;
		let args = { id: resource_id, base_version, resource: resource_body };

<<<<<<< HEAD
		service[name](args, req.contexts, deprecatedLogger)
			.then(results => handler.read(req, res, results))
			.catch(next);
=======
		service[funcName](args, req.contexts, logger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				next(errors.internal(err, base_version));
			});
>>>>>>> 3a83a43fb01d126ba810c1f4e8c2f77aef997713
	};
};

/**
 * @description Controller for all GET operations
 */
module.exports.operationsGet = function operationsGet({ profile, name, logger: deprecatedLogger }) {
	let { serviceModule: service } = profile;
	return (req, res, next) => {
<<<<<<< HEAD
		service[name](req.sanitized_args, req.contexts, deprecatedLogger)
			.then(results => handler.read(req, res, results))
			.catch(next);
=======
		let { base_version } = req.sanitized_args;
		service[funcName](req.sanitized_args, req.contexts, logger)
			.then(results => {
				responseUtils.handleOperationResponse(res, next, base_version, results);
			})
			.catch(err => {
				next(errors.internal(err, base_version));
			});
>>>>>>> 3a83a43fb01d126ba810c1f4e8c2f77aef997713
	};
};
