const { ServerError } = require('../../utils/error.utils');

module.exports.getObservations = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		/**
		* return service.getObservation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservation(req, logger)
			.then((observations) => {

				const searchResults = {
					'total': observations ? observations.length : 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

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
							'resource': resource,
							'fullUrl': `localhost:3000/Observation/${resource.id}`
						};
						searchResults.entry.push(entry);
					}
				}

				res.send(searchResults);
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};


module.exports.getObservationByID = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		logger.info('Get observation by id');
		/**
		* return service.getObservation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservationByID(req, logger)
			.then((observation) => {
				if (observation) {
					res.send(observation);
				} else {
					res.status(404).end();
				}
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
