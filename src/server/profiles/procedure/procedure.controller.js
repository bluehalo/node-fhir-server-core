const Procedure = require('../../resources/Procedure');
const errors = require('../../utils/error.utils');

module.exports.getProcedure = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getProcedure(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getProcedure(req, logger, context)
			.then((procedures) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (procedures) {
					for (let resource of procedures) {
						if (!req.procedure || req.procedure === resource.procedureId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Procedure(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Procedure/${resource.id}`
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


module.exports.getProcedureById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.procedure, then we need to validate that this procedure
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.procedure
			&& req.body
			&& req.body.id
			&& req.procedure !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access procedure ${req.body.id}.`));
		}

		return service.getProcedureById(req, logger, context)
			.then((procedure) => {
				if (procedure) {
					res.status(200).json(new Procedure(procedure));
				} else {
					next(errors.notFound('Procedure not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getProcedureByFriend = ({ profile, logger }) => {
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
// 		return service.getProcedureByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
