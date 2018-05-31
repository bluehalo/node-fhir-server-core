/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getGuidanceResponse = function getGuidanceResponse ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let GuidanceResponse = require(resolveFromVersion(version, 'uscore/GuidanceResponse'));

		return service.getGuidanceResponse(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, GuidanceResponse, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getGuidanceResponseById = function getGuidanceResponseById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let GuidanceResponse = require(resolveFromVersion(version, 'uscore/GuidanceResponse'));

		return service.getGuidanceResponseById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, GuidanceResponse, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating GuidanceResponse
 */
module.exports.createGuidanceResponse = function createGuidanceResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let GuidanceResponse = require(resolveFromVersion(version, 'uscore/GuidanceResponse'));
		// Validate the resource type before creating it
		if (GuidanceResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${GuidanceResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new GuidanceResponse(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createGuidanceResponse(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, GuidanceResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating GuidanceResponse. If the GuidanceResponse does not exist, it should be updated
 */
module.exports.updateGuidanceResponse = function updateGuidanceResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let GuidanceResponse = require(resolveFromVersion(version, 'uscore/GuidanceResponse'));
		// Validate the resource type before creating it
		if (GuidanceResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${GuidanceResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new GuidanceResponse(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateGuidanceResponse(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, GuidanceResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an GuidanceResponse.
 */
module.exports.deleteGuidanceResponse = function deleteGuidanceResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteGuidanceResponse(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
