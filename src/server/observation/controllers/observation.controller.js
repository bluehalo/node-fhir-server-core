const path = require('path');
const { ServerError } = require(path.resolve('./src/server/utils/error.utils'));
const Validator = require('jsonschema').Validator;
const observationSchema = require(path.resolve('./src/server/schemas/observation.schema'));

module.exports.getObservations = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		/**
		* return service.getObservation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.findObservations(req, logger)
			.then((observations) => {

				const searchResults = {
					'total': observations ? observations.length : 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (observations) {
					const v = new Validator();
					for (let resource of observations) {

						// serialize
						const serialized = JSON.parse(JSON.stringify(resource));

						// validate all resources
						if (v.validate(serialized, observationSchema).valid) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': serialized,
								'fullUrl': `localhost:3000/Observation/${resource.id}`
							};
							searchResults.entry.push(entry);
						} else {
							throw new Error('Invalid Observation: ' + resource.id);
						}
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
		/**
		* return service.getObservation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservation(req, logger)
			.then((observation) => {

				// serialize
				const serialized = JSON.parse(JSON.stringify(observation));

				// validate the Observation Object
				const v = new Validator();
				if (v.validate(serialized, observationSchema).valid) {
					res.send(serialized);
				} else {
					//
					throw new Error('Invalid Observation');
				}
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
