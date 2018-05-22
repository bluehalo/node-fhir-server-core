/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedication = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medication & bundle
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));

		return service.getMedication(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Medication, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getMedicationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medication
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));

		return service.getMedicationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Medication, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a medication
*/
module.exports.createMedication = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));
		// Validate the resource type before creating it
		if (Medication.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Medication.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication resource and pass it to the service
		let medication = new Medication(resource_body);
		let args = { id: resource_id, resource: medication };
		// Pass any new information to the underlying service
		return service.createMedication(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Medication.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a medication. If the medication does not exist, it should be updated
*/
module.exports.updateMedication = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));
		// Validate the resource type before creating it
		if (Medication.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Medication.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication resource and pass it to the service
		let medication = new Medication(resource_body);
		let args = { id: resource_id, resource: medication };
		// Pass any new information to the underlying service
		return service.updateMedication(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Medication.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a medication resource.
*/
module.exports.deleteMedication = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteMedication(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(new Error(err));
				// Pass the error back
				errors.handleDeleteRejection(res, next, version, err);
			});
	};
};
