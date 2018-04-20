const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationStatement = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific medicationstatement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/resources/MedicationStatement'));

		/**
		* return service.getMedicationStatement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationStatement(req, logger, context)
			.then((medicationstatements) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (medicationstatements) {
					for (let resource of medicationstatements) {
						if (!req.medicationstatement || req.medicationstatement === resource.medicationstatementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new MedicationStatement(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/MedicationStatement/${resource.id}`
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


module.exports.getMedicationStatementById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific medicationstatement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/resources/MedicationStatement'));

		return service.getMedicationStatementById(req, logger, context)
			.then((medicationstatement) => {
				if (medicationstatement) {
					res.status(200).json(new MedicationStatement(medicationstatement));
				} else {
					next(errors.notFound('MedicationStatement not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};
