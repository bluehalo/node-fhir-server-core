/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getComposition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific composition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Composition = require(resolveFromVersion(version, 'base/Composition'));

		/**
		* return service.getComposition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getComposition(req, logger, context)
			.then((compositions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (compositions) {
					for (let resource of compositions) {
						if (!req.composition || req.composition === resource.compositionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Composition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Composition/${resource.id}`
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


module.exports.getCompositionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific composition
		let Composition = require(resolveFromVersion(version, 'base/Composition'));

		return service.getCompositionById(req, logger, context)
			.then((composition) => {
				if (composition) {
					res.status(200).json(new Composition(composition));
				} else {
					next(errors.notFound('Composition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
