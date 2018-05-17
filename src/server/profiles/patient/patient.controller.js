/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');
const moment = require('moment');
const {
	EVENTS
} = require('../../../constants');

module.exports.getPatient = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific patient & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));

		return service.getPatient(req.sanitized_args, logger)
			.then((patients) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (patients) {
					for (let resource of patients) {
						if (!req.patient || req.patient === resource.patientId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Patient(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Patient/${resource.id}`
							});
						}
					}
				}

				results.entry = entries;
				results.total = entries.length;

				res.status(200).json(results);
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getPatientById = ({ profile, logger, app }) => {
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
			.then((patient) => {
				if (patient) {
						res.status(200).json(new Patient(patient));
				} else {
					next(errors.notFound('Patient not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
