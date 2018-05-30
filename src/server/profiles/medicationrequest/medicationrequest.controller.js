/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationRequest = function getMedicationRequest ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequest(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, MedicationRequest, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getMedicationRequestById = function getMedicationRequestById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequestById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, MedicationRequest, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating MedicationRequest
 */
module.exports.createMedicationRequest = function createMedicationRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));
		// Validate the resource type before creating it
		if (MedicationRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new MedicationRequest(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createMedicationRequest(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, MedicationRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating MedicationRequest. If the MedicationRequest does not exist, it should be updated
 */
module.exports.updateMedicationRequest = function updateMedicationRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));
		// Validate the resource type before creating it
		if (MedicationRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new MedicationRequest(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateMedicationRequest(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, MedicationRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an MedicationRequest.
 */
module.exports.deleteMedicationRequest = function deleteMedicationRequest ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteMedicationRequest(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
