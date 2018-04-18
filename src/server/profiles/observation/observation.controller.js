const Observation = require('../../standards/generic/resources/Observation');
const errors = require('../../utils/error.utils');

module.exports.getObservation = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;
	
	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		
		/**
		 * return service.getObservation(req, logger)
		 *		.then(sanitizeResponse) // Only show the user what they are allowed to see
		 *		.then(validateResponse); // Make sure the response data conforms to the spec
		 */
		return service.getObservation(req, logger, context)
			.then((observations) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};
				
				if (observations) {
					for (let resource of observations) {
						if (!req.observation || req.observation === resource.observationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Observation(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Observation/${resource.id}`
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


module.exports.getObservationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;
	
	return (req, res, next) => {
		
		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.observation, then we need to validate that this observation
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.observation
			&& req.body
			&& req.body.id
			&& req.observation !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access observation ${req.body.id}.`));
		}

		return service.getObservationById(req, logger, context)
			.then((observation) => {
				if (observation) {
					res.status(200).json(new Observation(observation));
				} else {
					next(errors.notFound('Observation not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};

// module.exports.getObservationByFriend = ({ profile, logger }) => {
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
// 		return service.getObservationByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
