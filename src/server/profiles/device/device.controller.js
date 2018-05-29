/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getDevice = function getDevice ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(version, 'uscore/Device'));

		return service.getDevice(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Device, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getDeviceById = function getDeviceById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(version, 'uscore/Device'));

		return service.getDeviceById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Device, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a device
*/
module.exports.createDevice = function createDevice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(version, 'uscore/Device'));
		// Validate the resource type before creating it
		if (Device.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Device.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new device resource and pass it to the service
		let device = new Device(resource_body);
		let args = { id: resource_id, resource: device };
		// Pass any new information to the underlying service
		return service.createDevice(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Device.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a device. If the device does not exist, it should be updated
*/
module.exports.updateDevice = function updateDevice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(version, 'uscore/Device'));
		// Validate the resource type before creating it
		if (Device.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Device.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new device resource and pass it to the service
		let device = new Device(resource_body);
		let args = { id: resource_id, resource: device };
		// Pass any new information to the underlying service
		return service.updateDevice(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Device.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a device resource.
*/
module.exports.deleteDevice = function deleteDevice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteDevice(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
