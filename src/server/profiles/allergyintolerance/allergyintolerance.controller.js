const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific allergyintolerance
		let { AllergyIntolerance } = require(resolveFromVersion(version, 'uscore/resources/AllergyIntolerance'));

		/**
		* return service.getAllergyIntolerance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAllergyIntolerance(req, logger, context)
			.then((allergyintolerances) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (allergyintolerances) {
					for (let resource of allergyintolerances) {
						if (!req.allergyintolerance || req.allergyintolerance === resource.allergyintoleranceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new AllergyIntolerance(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/AllergyIntolerance/${resource.id}`
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


module.exports.getAllergyIntoleranceById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific allergyintolerance
		let { AllergyIntolerance } = require(resolveFromVersion(version, 'uscore/resources/AllergyIntolerance'));

		return service.getAllergyIntoleranceById(req, logger, context)
			.then((allergyintolerance) => {
				if (allergyintolerance) {
					res.status(200).json(new AllergyIntolerance(allergyintolerance));
				} else {
					next(errors.notFound('AllergyIntolerance not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};