const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getObservation = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific observation
		let Observation = require(resolveFromVersion(version, 'uscore/Observation'));

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
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getObservationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific observation
		let Observation = require(resolveFromVersion(version, 'uscore/Observation'));

		return service.getObservationById(req, logger, context)
			.then((observation) => {
				if (observation) {
					res.status(200).json(new Observation(observation));
				} else {
					next(errors.notFound('Observation not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
