/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');
const moment = require('moment');
const {
	EVENTS
} = require('../../../constants');


/**
 * @description Construct a resource with base/uscore path
 */
let getResourceConstructor = (base) => {
	return require(resolveFromVersion(base, 'Patient'));
};

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


/**
 * @description Controller for getting a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id, version_id} = req.sanitized_args;

		let Patient = getResourceConstructor(base);
		let AuditEvent = require(resolveFromVersion(base, 'AuditEvent'));

		if ( req.patient && id && req.patient !== id ) {
			let resource = new AuditEvent({
				type: {
					system: 'https://www.hl7.org/fhir/valueset-audit-event-type.html',
					code: '110113',
					display: 'Security Alert',
					userSelected: false
				},
				recorded: moment().toISOString(),
				action: 'R',
				outcome: '4',
				outcomeDescription: `Patient ${req.patient} tried to access patient ${req.params.id} and is not allowed to access this patient.`
			});
			app.emit(EVENTS.AUDIT, resource);
			return next(errors.unauthorized(`You are not allowed to access patient ${req.params.id}.`, base));
		}

		return service.searchByVersionId(req.sanitized_args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base, Patient, results, version_id)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

module.exports.search = function search ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));

		return service.search(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Patient, results, {
					resourceUrl: config.auth.resourceServer,
					filter: patient_filter(req.patient)
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};

};


module.exports.searchById = function searchById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));
		let AuditEvent = require(resolveFromVersion(base, 'AuditEvent'));

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
			return next(errors.unauthorized(`You are not allowed to access patient ${req.params.id}.`, base));
		}

		return service.searchById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base, Patient, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for creating a patient
*/
module.exports.create = function create ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, resource_id} = req.sanitized_args;
		let resource_body = req.body;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Patient.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { id: resource_id, resource: patient };
		// Pass any new information to the underlying service
		return service.create(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, base, Patient.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for updating/creating a patient. If the patient does not exist, it should be updated
*/
module.exports.update = function update ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id} = req.sanitized_args;
		let resource_body = req.body;

		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Patient.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { id, base, resource: patient };
		// Pass any new information to the underlying service
		return service.update(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, base, Patient.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for deleting a patient resource.
*/
module.exports.remove = function remove ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;

		return service.remove(req.sanitized_args, logger)
			.then((results) => responseUtils.handleDeleteResponse(res, results))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base, err);
			});
	};
};

/**
* @description Controller for getting the history of a Patient resource.
*/
module.exports.history = function history ({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));

		return service.history(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleHistoryResponse( res, base, Patient, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for getting the history of a Patient resource by ID.
*/
module.exports.historyById = function historyById ({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base, 'Patient'));

		return service.historyById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleHistoryResponse( res, base, Patient, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};