/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medicationrequest
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequest(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, MedicationRequest, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getMedicationRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medicationrequest
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequestById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, MedicationRequest, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a medication_request
*/
module.exports.createMedicationRequest = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication_request
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));
		// Validate the resource type before creating it
		if (MedicationRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication_request resource and pass it to the service
		let medication_request = new MedicationRequest(resource_body);
		let args = { id: resource_id, resource: medication_request };
		// Pass any new information to the underlying service
		return service.createMedicationRequest(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, MedicationRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a medication_request. If the medication_request does not exist, it should be updated
*/
module.exports.updateMedicationRequest = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication_request
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));
		// Validate the resource type before creating it
		if (MedicationRequest.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication_request resource and pass it to the service
		let medication_request = new MedicationRequest(resource_body);
		let args = { id: resource_id, resource: medication_request };
		// Pass any new information to the underlying service
		return service.updateMedicationRequest(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, MedicationRequest.__resourceType, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};
