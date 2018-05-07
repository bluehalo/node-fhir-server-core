const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedication = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific medication
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));

		/**
		* return service.getMedication(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedication(req, logger, context)
			.then((medications) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (medications) {
					for (let resource of medications) {
						if (!req.medication || req.medication === resource.medicationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Medication(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Medication/${resource.id}`
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


module.exports.getMedicationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific medication
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));

		return service.getMedicationById(req, logger, context)
			.then((medication) => {
				if (medication) {
					res.status(200).json(new Medication(medication));
				} else {
					next(errors.notFound('Medication not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
