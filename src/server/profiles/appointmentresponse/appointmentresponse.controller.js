/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getAppointmentResponse = function getAppointmentResponse ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AppointmentResponse = require(resolveFromVersion(version, 'uscore/AppointmentResponse'));

		return service.getAppointmentResponse(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, AppointmentResponse, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getAppointmentResponseById = function getAppointmentResponseById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AppointmentResponse = require(resolveFromVersion(version, 'uscore/AppointmentResponse'));

		return service.getAppointmentResponseById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, AppointmentResponse, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating AppointmentResponse
 */
module.exports.createAppointmentResponse = function createAppointmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let AppointmentResponse = require(resolveFromVersion(version, 'uscore/AppointmentResponse'));
		// Validate the resource type before creating it
		if (AppointmentResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AppointmentResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AppointmentResponse(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createAppointmentResponse(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, AppointmentResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating AppointmentResponse. If the AppointmentResponse does not exist, it should be updated
 */
module.exports.updateAppointmentResponse = function updateAppointmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let AppointmentResponse = require(resolveFromVersion(version, 'uscore/AppointmentResponse'));
		// Validate the resource type before creating it
		if (AppointmentResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AppointmentResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AppointmentResponse(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateAppointmentResponse(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, AppointmentResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an AppointmentResponse.
 */
module.exports.deleteAppointmentResponse = function deleteAppointmentResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteAppointmentResponse(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
