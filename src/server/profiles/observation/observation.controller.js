/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

/**
* Helper for getting the correct constructor for the various observation types
*/
let getResourceConstructor = (version, resourceType) => {
	let Observation = require(resolveFromVersion(version, 'uscore/Observation'));
	let Results = require(resolveFromVersion(version, 'uscore/Results'));
	let SmokingStatus = require(resolveFromVersion(version, 'uscore/SmokingStatus'));

	switch (resourceType) {
		case Results.__resourceType:
			return Results;
		case SmokingStatus.__resourceType:
			return SmokingStatus;
		default:
			return Observation;
	}
};

module.exports.getObservation = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));

		/**
		 * return service.getObservation(req, logger)
		 *		.then(sanitizeResponse) // Only show the user what they are allowed to see
		 *		.then(validateResponse); // Make sure the response data conforms to the spec
		 */
		return service.getObservation(req, logger, context)
			.then((observations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observations) {
					for (let resource of observations) {
						if (!req.observation || req.observation === resource.observationId) {
							// Get a version specific observation for the correct type of observation
							let Observation = getResourceConstructor(version, resource.resourceType);
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Observation(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Observation/${resource.id}`
							});
						}
					}
				}

				results.entry = entries;
				results.total = entries.length;

				res.status(200).json(results);
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getObservationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		return service.getObservationById(req, logger, context)
			.then((observation) => {
				if (observation) {
					// Get a version specific observation for the correct type of observation
					let Observation = getResourceConstructor(version, observation.resourceType);
					res.status(200).json(new Observation(observation));
				} else {
					next(errors.notFound('Observation not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
