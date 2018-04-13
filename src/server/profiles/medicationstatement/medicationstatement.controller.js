const MedicationStatement = require('../../resources/uscore/resources/MedicationStatement');
const errors = require('../../utils/error.utils');

module.exports.getMedicationStatement = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

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

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.medicationstatement, then we need to validate that this medicationstatement
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.medicationstatement
			&& req.body
			&& req.body.id
			&& req.medicationstatement !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access medicationstatement ${req.body.id}.`));
		}

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


// module.exports.getMedicationStatementByFriend = ({ profile, logger }) => {
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
// 		return service.getMedicationStatementByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
