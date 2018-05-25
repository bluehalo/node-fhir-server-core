/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');
const moment = require('moment');
const {
	EVENTS
} = require('../../../constants');


/**
* @description Filter function for only allowing a certain patient to be
* accessed if a patient id is present on the req object. user_id is req.patient
* currently so if that value is present, they should only see patients whose
* id matches.
*/
let patient_filter = function (user_id) {
	// TODO: Is this ever going to work, user_id is from them logging in
	// with SMART and since we do not know if that id matches whatever id
	// the EHR has, how can we verify they are the same
	return (patient) => !user_id || user_id === patient.id;
};

module.exports.getPatient = function getPatient ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));

		return service.getPatient(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Patient, results, {
					resourceUrl: config.auth.resourceServer,
					filter: patient_filter(req.patient)
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getPatientById = function getPatientById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));
		let AuditEvent = require(resolveFromVersion(version, 'uscore/AuditEvent'));

		// If we have req.patient, then we need to validate that this patient
		// is only accessing resources with his id, he is not allowed to access others
		if ( req.patient && id && req.patient !== id ) {
			// Create an audit event
			let resource = new AuditEvent({
				// the type is a coding of the type of incident
				type: {
					system: 'https://www.hl7.org/fhir/valueset-audit-event-type.html',
					code: '110113',
					display: 'Security Alert',
					userSelected: false
				},
				// Time of the event
				recorded: moment().toISOString(),
				// The attempted action is a read, according to https://www.hl7.org/fhir/valueset-audit-event-action.html
				action: 'R',
				// The outcome was a minor failure, according to https://www.hl7.org/fhir/valueset-audit-event-outcome.html
				outcome: '4',
				// Description of the outcome
				outcomeDescription: `Patient ${req.patient} tried to access patient ${req.params.id} and is not allowed to access this patient.`
			});
			app.emit(EVENTS.AUDIT, resource);
			return next(errors.unauthorized(`You are not allowed to access patient ${req.params.id}.`, version));
		}

		return service.getPatientById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Patient, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a patient
*/
module.exports.createPatient = function createPatient ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Patient.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { id: resource_id, resource: patient };
		// Pass any new information to the underlying service
		return service.createPatient(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Patient.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a patient. If the patient does not exist, it should be updated
*/
module.exports.updatePatient = function updatePatient ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Patient.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { id: resource_id, resource: patient };
		// Pass any new information to the underlying service
		return service.updatePatient(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Patient.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a patient resource.
*/
module.exports.deletePatient = function deletePatient ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deletePatient(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
