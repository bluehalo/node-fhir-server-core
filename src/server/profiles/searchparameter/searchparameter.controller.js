/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSearchParameter = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific searchparameter & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let SearchParameter = require(resolveFromVersion(version, 'base/SearchParameter'));

		/**
		* return service.getSearchParameter(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSearchParameter(req, logger, context)
			.then((searchparameters) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (searchparameters) {
					for (let resource of searchparameters) {
						if (!req.searchparameter || req.searchparameter === resource.searchparameterId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new SearchParameter(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/SearchParameter/${resource.id}`
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


module.exports.getSearchParameterById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific searchparameter
		let SearchParameter = require(resolveFromVersion(version, 'base/SearchParameter'));

		return service.getSearchParameterById(req, logger, context)
			.then((searchparameter) => {
				if (searchparameter) {
					res.status(200).json(new SearchParameter(searchparameter));
				} else {
					next(errors.notFound('SearchParameter not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
