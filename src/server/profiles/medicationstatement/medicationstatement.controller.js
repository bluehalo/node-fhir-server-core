/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationStatement = function getMedicationStatement ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medicationstatement & bundle
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));

		return service.getMedicationStatement(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, MedicationStatement, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getMedicationStatementById = function getMedicationStatementById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medicationstatement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));

		return service.getMedicationStatementById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, MedicationStatement, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a medication_statement
*/
module.exports.createMedicationStatement = function createMedicationStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication_statement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));
		// Validate the resource type before creating it
		if (MedicationStatement.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationStatement.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication_statement resource and pass it to the service
		let medication_statement = new MedicationStatement(resource_body);
		let args = { id: resource_id, resource: medication_statement };
		// Pass any new information to the underlying service
		return service.createMedicationStatement(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, MedicationStatement.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a medication_statement. If the medication_statement does not exist, it should be updated
*/
module.exports.updateMedicationStatement = function updateMedicationStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific medication_statement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));
		// Validate the resource type before creating it
		if (MedicationStatement.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MedicationStatement.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new medication_statement resource and pass it to the service
		let medication_statement = new MedicationStatement(resource_body);
		let args = { id: resource_id, resource: medication_statement };
		// Pass any new information to the underlying service
		return service.updateMedicationStatement(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, MedicationStatement.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an medication statement resource.
*/
module.exports.deleteMedicationStatement = function deleteMedicationStatement ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteMedicationStatement(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
