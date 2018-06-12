/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getVisionPrescription = function getVisionPrescription ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));

		return service.getVisionPrescription(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, VisionPrescription, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getVisionPrescriptionById = function getVisionPrescriptionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));

		return service.getVisionPrescriptionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, VisionPrescription, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating VisionPrescription
 */
module.exports.createVisionPrescription = function createVisionPrescription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));
		// Validate the resource type before creating it
		if (VisionPrescription.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${VisionPrescription.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new VisionPrescription(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createVisionPrescription(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, VisionPrescription.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating VisionPrescription. If the VisionPrescription does not exist, it should be updated
 */
module.exports.updateVisionPrescription = function updateVisionPrescription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));
		// Validate the resource type before creating it
		if (VisionPrescription.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${VisionPrescription.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new VisionPrescription(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateVisionPrescription(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, VisionPrescription.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an VisionPrescription.
 */
module.exports.deleteVisionPrescription = function deleteVisionPrescription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteVisionPrescription(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
