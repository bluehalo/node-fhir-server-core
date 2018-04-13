const ObservationVitalSigns = require('../../resources/uscore/resources/ObservationVitalSigns');
const errors = require('../../utils/error.utils');

module.exports.getObservationVitalSigns = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getObservationVitalSigns(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservationVitalSigns(req, logger, context)
			.then((observationvitalsignss) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (observationvitalsignss) {
					for (let resource of observationvitalsignss) {
						if (!req.observationvitalsigns || req.observationvitalsigns === resource.observationvitalsignsId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new ObservationVitalSigns(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/ObservationVitalSigns/${resource.id}`
							};
							searchResults.entry.push(entry);
						}
						searchResults.total = searchResults.entry.length;
					}
				}

				res.status(200).json(searchResults);
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};


};


module.exports.getObservationVitalSignsById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.observationvitalsigns, then we need to validate that this observationvitalsigns
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.observationvitalsigns
			&& req.body
			&& req.body.id
			&& req.observationvitalsigns !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access observationvitalsigns ${req.body.id}.`));
		}

		return service.getObservationVitalSignsById(req, logger, context)
			.then((observationvitalsigns) => {
				if (observationvitalsigns) {
					res.status(200).json(new ObservationVitalSigns(observationvitalsigns));
				} else {
					next(errors.notFound('ObservationVitalSigns not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getObservationVitalSignsByFriend = ({ profile, logger }) => {
// 	let { serviceModule: service } = profile;
//
// 	return (req, res, next) => {
//
// 		// Create a context I can pass some data through
// 		let context = {
// 			version: req.params.version
// 		};
//
//
// 		return service.getObservationVitalSignsByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
