/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getEnrollmentResponse = function getEnrollmentResponse ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentResponse = require(resolveFromVersion(version, 'uscore/EnrollmentResponse'));

		return service.getEnrollmentResponse(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, EnrollmentResponse, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getEnrollmentResponseById = function getEnrollmentResponseById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentResponse = require(resolveFromVersion(version, 'uscore/EnrollmentResponse'));

		return service.getEnrollmentResponseById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, EnrollmentResponse, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating EnrollmentResponse
 */
module.exports.createEnrollmentResponse = function createEnrollmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentResponse = require(resolveFromVersion(version, 'uscore/EnrollmentResponse'));
		// Validate the resource type before creating it
		if (EnrollmentResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EnrollmentResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new EnrollmentResponse(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createEnrollmentResponse(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, EnrollmentResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating EnrollmentResponse. If the EnrollmentResponse does not exist, it should be updated
 */
module.exports.updateEnrollmentResponse = function updateEnrollmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentResponse = require(resolveFromVersion(version, 'uscore/EnrollmentResponse'));
		// Validate the resource type before creating it
		if (EnrollmentResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EnrollmentResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new EnrollmentResponse(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateEnrollmentResponse(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, EnrollmentResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an EnrollmentResponse.
 */
module.exports.deleteEnrollmentResponse = function deleteEnrollmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteEnrollmentResponse(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
