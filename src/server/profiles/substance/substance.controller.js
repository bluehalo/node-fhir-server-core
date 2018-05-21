/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSubstance = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific substance & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Substance = require(resolveFromVersion(version, 'base/Substance'));

		/**
		* return service.getSubstance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSubstance(req, logger, context)
			.then((substances) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (substances) {
					for (let resource of substances) {
						if (!req.substance || req.substance === resource.substanceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Substance(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Substance/${resource.id}`
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


module.exports.getSubstanceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific substance
		let Substance = require(resolveFromVersion(version, 'base/Substance'));

		return service.getSubstanceById(req, logger, context)
			.then((substance) => {
				if (substance) {
					res.status(200).json(new Substance(substance));
				} else {
					next(errors.notFound('Substance not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
