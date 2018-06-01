/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationAdministration = function getMedicationAdministration ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));

		return service.getMedicationAdministration(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, MedicationAdministration, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getMedicationAdministrationById = function getMedicationAdministrationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));

		return service.getMedicationAdministrationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, MedicationAdministration, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating MedicationAdministration
 */
module.exports.createMedicationAdministration = function createMedicationAdministration ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));
		// Validate the resource type before creating it
		if (MedicationAdministration.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationAdministration.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new MedicationAdministration(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createMedicationAdministration(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, MedicationAdministration.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating MedicationAdministration. If the MedicationAdministration does not exist, it should be updated
 */
module.exports.updateMedicationAdministration = function updateMedicationAdministration ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));
		// Validate the resource type before creating it
		if (MedicationAdministration.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationAdministration.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new MedicationAdministration(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateMedicationAdministration(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, MedicationAdministration.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an MedicationAdministration.
 */
module.exports.deleteMedicationAdministration = function deleteMedicationAdministration ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteMedicationAdministration(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
