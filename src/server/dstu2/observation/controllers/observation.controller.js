const errors = require('../../../utils/error.utils');
const { VERSIONS } = require('../../../../constants');
const { Observation } = require('../../resources');


module.exports.getObservations = (profile, logger, config) => {
	let { serviceModule: service } = profile;

	// Create a context I can pass some data through
	let context = {
		version: VERSIONS.DSTU2
	};

	return (req, res, next) => {

		return service.getObservation(req, logger, context)
			.then((observations) => {

				const searchResults = {
					'total': observations ? observations.length : 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				let unauthorizedAccesses = [];

				if (observations) {
					for (let resource of observations) {
						// Modes:
						// match - This resource matched the search specification.
						// include - This resource is returned because it is referred to from another resource in the search set.
						// outcome - An OperationOutcome that provides additional information about the processing of a search.
						const entry = {
							'search': {
								'mode': 'match'
							},
							'resource': new Observation(resource),
							'fullUrl': `${config.auth.resourceServer}/dstu2/Observation/${resource.id}`
						};
						searchResults.entry.push(entry);
						// if req.patient is present, they are only allowed to access observations
						// which reference a patient with their id, so if any resource.id
						// does not equal the req.patient, then they are attempting to access
						// a patients records that they are not allowed to access
						if (req.patient && req.patient !== entry.resource.patientId) {
							unauthorizedAccesses.push(entry.resource.patientId);
						}
					}
				}

				if (unauthorizedAccesses.length) {
					let message = `You are not allowed to access observations(s) referencing patients with id(s) ${unauthorizedAccesses.join(',')}.`;
					message += `  You are only allowed to access records with patient id ${req.patient}.`;
					next(errors.unauthorized(message));
				}
				else {
					res.status(200).json(searchResults);
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


module.exports.getObservationById = (profile, logger) => {
	let { serviceModule: service } = profile;

	// Create a context I can pass some data through
	let context = {
		version: VERSIONS.DSTU2
	};

	return (req, res, next) => {
		logger.info('Get observation by id');

		return service.getObservationById(req, logger, context)
			.then((patientObservation) => {
				if (patientObservation) {
					let observation = new Observation(patientObservation);
					// If we have req.patient, then we need to validate that this patient
					// is only accessing Observations referencing his patient Id
					// he is not allowed to access others
					if (req.patient && observation.patientId && req.patient !== observation.patientId) {
						next(errors.unauthorized(`You are not allowed to access Observations referencing ${observation.patientId}.`));
					}
					else {
						res.status(200).json(observation);
					}
				} else {
					next(errors.notFound('Observation not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};
