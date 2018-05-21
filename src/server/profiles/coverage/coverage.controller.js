/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCoverage = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific coverage & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Coverage = require(resolveFromVersion(version, 'base/Coverage'));

		/**
		* return service.getCoverage(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCoverage(req, logger, context)
			.then((coverages) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (coverages) {
					for (let resource of coverages) {
						if (!req.coverage || req.coverage === resource.coverageId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Coverage(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Coverage/${resource.id}`
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


module.exports.getCoverageById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific coverage
		let Coverage = require(resolveFromVersion(version, 'base/Coverage'));

		return service.getCoverageById(req, logger, context)
			.then((coverage) => {
				if (coverage) {
					res.status(200).json(new Coverage(coverage));
				} else {
					next(errors.notFound('Coverage not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
