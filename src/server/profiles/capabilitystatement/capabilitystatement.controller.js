/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getCapabilityStatement = function getCapabilityStatement ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));

		return service.getCapabilityStatement(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, CapabilityStatement, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getCapabilityStatementById = function getCapabilityStatementById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));

		return service.getCapabilityStatementById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, CapabilityStatement, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating CapabilityStatement
 */
module.exports.createCapabilityStatement = function createCapabilityStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));
		// Validate the resource type before creating it
		if (CapabilityStatement.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CapabilityStatement.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new CapabilityStatement(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createCapabilityStatement(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, CapabilityStatement.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating CapabilityStatement. If the CapabilityStatement does not exist, it should be updated
 */
module.exports.updateCapabilityStatement = function updateCapabilityStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));
		// Validate the resource type before creating it
		if (CapabilityStatement.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CapabilityStatement.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new CapabilityStatement(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateCapabilityStatement(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, CapabilityStatement.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an CapabilityStatement.
 */
module.exports.deleteCapabilityStatement = function deleteCapabilityStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteCapabilityStatement(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
