const CareTeam = require('../../standards/uscore/resources/CareTeam');
const errors = require('../../utils/error.utils');

module.exports.getCareTeam = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getCareTeam(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCareTeam(req, logger, context)
			.then((careteams) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (careteams) {
					for (let resource of careteams) {
						if (!req.careteam || req.careteam === resource.careteamId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new CareTeam(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/CareTeam/${resource.id}`
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


module.exports.getCareTeamById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.careteam, then we need to validate that this careteam
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.careteam
			&& req.body
			&& req.body.id
			&& req.careteam !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access careteam ${req.body.id}.`));
		}

		return service.getCareTeamById(req, logger, context)
			.then((careteam) => {
				if (careteam) {
					res.status(200).json(new CareTeam(careteam));
				} else {
					next(errors.notFound('CareTeam not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getCareTeamByFriend = ({ profile, logger }) => {
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
// 		return service.getCareTeamByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
