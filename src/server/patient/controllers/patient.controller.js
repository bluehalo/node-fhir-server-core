const path = require('path');
const { ServerError } = require(path.resolve('./src/server/utils/error.utils'));

module.exports.getPatient = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		// @TODO Validate arguments and response
		/**
		* return service.getPatient(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPatient(req, logger)
			.then((patients) => {
				const searchResults = {
					'total': patients ? patients.length : 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (patients) {
					for (let resource of patients) {
						// Modes:
						// match - This resource matched the search specification.
						// include - This resource is returned because it is referred to from another resource in the search set.
						// outcome - An OperationOutcome that provides additional information about the processing of a search.
						const entry = {
							'search': {
								'mode': 'match'
							},
							'resource': resource,
							'fullUrl': `localhost:3000/Patient/${resource.id}`
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


module.exports.getPatientById = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		// @TODO Validate arguments and response
		/**
		* return service.getPatientById(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPatientById(req, logger)
			.then((patient) => {
				if (patient) {
					res.send(patient);
				} else {
					res.status(404).end();
				}
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
