/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getOperationDefinition = function getOperationDefinition ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let OperationDefinition = require(resolveFromVersion(version, 'uscore/OperationDefinition'));

		return service.getOperationDefinition(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, OperationDefinition, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getOperationDefinitionById = function getOperationDefinitionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let OperationDefinition = require(resolveFromVersion(version, 'uscore/OperationDefinition'));

		return service.getOperationDefinitionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, OperationDefinition, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating OperationDefinition
 */
module.exports.createOperationDefinition = function createOperationDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let OperationDefinition = require(resolveFromVersion(version, 'uscore/OperationDefinition'));
		// Validate the resource type before creating it
		if (OperationDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${OperationDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new OperationDefinition(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createOperationDefinition(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, OperationDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating OperationDefinition. If the OperationDefinition does not exist, it should be updated
 */
module.exports.updateOperationDefinition = function updateOperationDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let OperationDefinition = require(resolveFromVersion(version, 'uscore/OperationDefinition'));
		// Validate the resource type before creating it
		if (OperationDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${OperationDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new OperationDefinition(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateOperationDefinition(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, OperationDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an OperationDefinition.
 */
module.exports.deleteOperationDefinition = function deleteOperationDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteOperationDefinition(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
