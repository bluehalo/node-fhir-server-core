/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getCompartmentDefinition = function getCompartmentDefinition ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));

		return service.getCompartmentDefinition(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, CompartmentDefinition, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getCompartmentDefinitionById = function getCompartmentDefinitionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));

		return service.getCompartmentDefinitionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, CompartmentDefinition, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating CompartmentDefinition
 */
module.exports.createCompartmentDefinition = function createCompartmentDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));
		// Validate the resource type before creating it
		if (CompartmentDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CompartmentDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new CompartmentDefinition(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createCompartmentDefinition(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, CompartmentDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating CompartmentDefinition. If the CompartmentDefinition does not exist, it should be updated
 */
module.exports.updateCompartmentDefinition = function updateCompartmentDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));
		// Validate the resource type before creating it
		if (CompartmentDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CompartmentDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new CompartmentDefinition(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateCompartmentDefinition(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, CompartmentDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an CompartmentDefinition.
 */
module.exports.deleteCompartmentDefinition = function deleteCompartmentDefinition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteCompartmentDefinition(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
