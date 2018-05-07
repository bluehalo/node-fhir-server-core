const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPractitioner = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));

		/**
		* return service.getPractitioner(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPractitioner(req, logger, context)
			.then((practitioners) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (practitioners) {
					for (let resource of practitioners) {
						if (!req.practitioner || req.practitioner === resource.practitionerId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Practitioner(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Practitioner/${resource.id}`
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


module.exports.getPractitionerById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));

		return service.getPractitionerById(req, logger, context)
			.then((practitioner) => {
				if (practitioner) {
					res.status(200).json(new Practitioner(practitioner));
				} else {
					next(errors.notFound('Practitioner not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
