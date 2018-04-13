const CarePlan = require('../../resources/uscore/resources/CarePlan');
const errors = require('../../utils/error.utils');

module.exports.getCarePlan = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getCarePlan(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCarePlan(req, logger, context)
			.then((careplans) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (careplans) {
					for (let resource of careplans) {
						if (!req.careplan || req.careplan === resource.careplanId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new CarePlan(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/CarePlan/${resource.id}`
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


module.exports.getCarePlanById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.careplan, then we need to validate that this careplan
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.careplan
			&& req.body
			&& req.body.id
			&& req.careplan !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access careplan ${req.body.id}.`));
		}

		return service.getCarePlanById(req, logger, context)
			.then((careplan) => {
				if (careplan) {
					res.status(200).json(new CarePlan(careplan));
				} else {
					next(errors.notFound('CarePlan not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getCarePlanByFriend = ({ profile, logger }) => {
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
// 		return service.getCarePlanByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
