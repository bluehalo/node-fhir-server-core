const Organization = require('../../standards/uscore/resources/Organization');
const errors = require('../../utils/error.utils');

module.exports.getOrganization = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getOrganization(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getOrganization(req, logger, context)
			.then((organizations) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (organizations) {
					for (let resource of organizations) {
						if (!req.organization || req.organization === resource.organizationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Organization(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Organization/${resource.id}`
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


module.exports.getOrganizationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.organization, then we need to validate that this organization
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.organization
			&& req.body
			&& req.body.id
			&& req.organization !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access organization ${req.body.id}.`));
		}

		return service.getOrganizationById(req, logger, context)
			.then((organization) => {
				if (organization) {
					res.status(200).json(new Organization(organization));
				} else {
					next(errors.notFound('Organization not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getOrganizationByFriend = ({ profile, logger }) => {
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
// 		return service.getOrganizationByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
