const Condition = require('../../standards/uscore/resources/Condition');
const errors = require('../../utils/error.utils');

module.exports.getCondition = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getCondition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCondition(req, logger, context)
			.then((conditions) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (conditions) {
					for (let resource of conditions) {
						if (!req.condition || req.condition === resource.conditionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Condition(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Condition/${resource.id}`
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


module.exports.getConditionById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.condition, then we need to validate that this condition
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.condition
			&& req.body
			&& req.body.id
			&& req.condition !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access condition ${req.body.id}.`));
		}

		return service.getConditionById(req, logger, context)
			.then((condition) => {
				if (condition) {
					res.status(200).json(new Condition(condition));
				} else {
					next(errors.notFound('Condition not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getConditionByFriend = ({ profile, logger }) => {
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
// 		return service.getConditionByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
