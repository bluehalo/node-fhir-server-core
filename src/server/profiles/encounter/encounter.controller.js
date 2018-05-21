/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEncounter = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific encounter & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));

		/**
		* return service.getEncounter(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEncounter(req, logger, context)
			.then((encounters) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (encounters) {
					for (let resource of encounters) {
						if (!req.encounter || req.encounter === resource.encounterId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Encounter(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Encounter/${resource.id}`
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


module.exports.getEncounterById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific encounter
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));

		return service.getEncounterById(req, logger, context)
			.then((encounter) => {
				if (encounter) {
					res.status(200).json(new Encounter(encounter));
				} else {
					next(errors.notFound('Encounter not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
