/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getEnrollmentRequest = function getEnrollmentRequest ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentRequest = require(resolveFromVersion(version, 'uscore/EnrollmentRequest'));

		return service.getEnrollmentRequest(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, EnrollmentRequest, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getEnrollmentRequestById = function getEnrollmentRequestById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentRequest = require(resolveFromVersion(version, 'uscore/EnrollmentRequest'));

		return service.getEnrollmentRequestById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, EnrollmentRequest, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating EnrollmentRequest
 */
module.exports.createEnrollmentRequest = function createEnrollmentRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentRequest = require(resolveFromVersion(version, 'uscore/EnrollmentRequest'));
		// Validate the resource type before creating it
		if (EnrollmentRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EnrollmentRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new EnrollmentRequest(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createEnrollmentRequest(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, EnrollmentRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating EnrollmentRequest. If the EnrollmentRequest does not exist, it should be updated
 */
module.exports.updateEnrollmentRequest = function updateEnrollmentRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EnrollmentRequest = require(resolveFromVersion(version, 'uscore/EnrollmentRequest'));
		// Validate the resource type before creating it
		if (EnrollmentRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EnrollmentRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new EnrollmentRequest(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateEnrollmentRequest(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, EnrollmentRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an EnrollmentRequest.
 */
module.exports.deleteEnrollmentRequest = function deleteEnrollmentRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteEnrollmentRequest(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
