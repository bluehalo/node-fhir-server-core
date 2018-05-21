/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMeasure = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific measure & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Measure = require(resolveFromVersion(version, 'base/Measure'));

		/**
		* return service.getMeasure(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMeasure(req, logger, context)
			.then((measures) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (measures) {
					for (let resource of measures) {
						if (!req.measure || req.measure === resource.measureId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Measure(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Measure/${resource.id}`
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


module.exports.getMeasureById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific measure
		let Measure = require(resolveFromVersion(version, 'base/Measure'));

		return service.getMeasureById(req, logger, context)
			.then((measure) => {
				if (measure) {
					res.status(200).json(new Measure(measure));
				} else {
					next(errors.notFound('Measure not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
