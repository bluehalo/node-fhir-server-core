const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getObservationSmokingStatus = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific observationsmokingstatus
		let { ObservationSmokingStatus } = require(resolveFromVersion(version, 'uscore/resources/ObservationSmokingStatus'));

		/**
		* return service.getObservationSmokingStatus(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservationSmokingStatus(req, logger, context)
			.then((observationsmokingstatuss) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (observationsmokingstatuss) {
					for (let resource of observationsmokingstatuss) {
						if (!req.observationsmokingstatus || req.observationsmokingstatus === resource.observationsmokingstatusId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new ObservationSmokingStatus(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/ObservationSmokingStatus/${resource.id}`
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


module.exports.getObservationSmokingStatusById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific observationsmokingstatus
		let { ObservationSmokingStatus } = require(resolveFromVersion(version, 'uscore/resources/ObservationSmokingStatus'));

		return service.getObservationSmokingStatusById(req, logger, context)
			.then((observationsmokingstatus) => {
				if (observationsmokingstatus) {
					res.status(200).json(new ObservationSmokingStatus(observationsmokingstatus));
				} else {
					next(errors.notFound('ObservationSmokingStatus not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};
