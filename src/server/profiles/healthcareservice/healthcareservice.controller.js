/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getHealthcareService = function getHealthcareService ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));

		return service.getHealthcareService(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, HealthcareService, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getHealthcareServiceById = function getHealthcareServiceById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));

		return service.getHealthcareServiceById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, HealthcareService, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating HealthcareService
 */
module.exports.createHealthcareService = function createHealthcareService ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));
		// Validate the resource type before creating it
		if (HealthcareService.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${HealthcareService.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new HealthcareService(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createHealthcareService(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, HealthcareService.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating HealthcareService. If the HealthcareService does not exist, it should be updated
 */
module.exports.updateHealthcareService = function updateHealthcareService ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));
		// Validate the resource type before creating it
		if (HealthcareService.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${HealthcareService.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new HealthcareService(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateHealthcareService(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, HealthcareService.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an HealthcareService.
 */
module.exports.deleteHealthcareService = function deleteHealthcareService ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteHealthcareService(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
