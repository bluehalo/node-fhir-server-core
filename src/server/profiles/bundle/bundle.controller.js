/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getBundle = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific bundle & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		//let Bundle = require(resolveFromVersion(version, 'base/Bundle'));

		/**
		* return service.getBundle(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getBundle(req, logger, context)
			.then((bundles) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (bundles) {
					for (let resource of bundles) {
						if (!req.bundle || req.bundle === resource.bundleId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Bundle(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Bundle/${resource.id}`
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


module.exports.getBundleById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));

		return service.getBundleById(req, logger, context)
			.then((bundle) => {
				if (bundle) {
					res.status(200).json(new Bundle(bundle));
				} else {
					next(errors.notFound('Bundle not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
