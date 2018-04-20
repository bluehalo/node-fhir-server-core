const { resolveFromVersion } = require('../../utils/error.utils');
const errors = require('../../utils/error.utils');

module.exports.getLocation = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific location
		let { Location } = require(resolveFromVersion(version, 'uscore/resources/Location'));

		/**
		* return service.getLocation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getLocation(req, logger, context)
			.then((locations) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (locations) {
					for (let resource of locations) {
						if (!req.location || req.location === resource.locationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Location(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Location/${resource.id}`
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


module.exports.getLocationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific location
		let { Location } = require(resolveFromVersion(version, 'uscore/resources/Location'));

		return service.getLocationById(req, logger, context)
			.then((location) => {
				if (location) {
					res.status(200).json(new Location(location));
				} else {
					next(errors.notFound('Location not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};
