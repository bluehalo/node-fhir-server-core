const ObservationResults = require('../../resources/uscore/resources/ObservationResults');
const errors = require('../../utils/error.utils');

module.exports.getObservationResults = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getObservationResults(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservationResults(req, logger, context)
			.then((observationresultss) => {
				const searchObservationResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (observationresultss) {
					for (let resource of observationresultss) {
						if (!req.observationresults || req.observationresults === resource.observationresultsId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new ObservationResults(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/ObservationResults/${resource.id}`
							};
							searchObservationResults.entry.push(entry);
						}
						searchObservationResults.total = searchObservationResults.entry.length;
					}
				}

				res.status(200).json(searchObservationResults);
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};


};


module.exports.getObservationResultsById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.observationresults, then we need to validate that this observationresults
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.observationresults
			&& req.body
			&& req.body.id
			&& req.observationresults !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access observationresults ${req.body.id}.`));
		}

		return service.getObservationResultsById(req, logger, context)
			.then((observationresults) => {
				if (observationresults) {
					res.status(200).json(new ObservationResults(observationresults));
				} else {
					next(errors.notFound('ObservationResults not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getObservationResultsByFriend = ({ profile, logger }) => {
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
// 		return service.getObservationResultsByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
