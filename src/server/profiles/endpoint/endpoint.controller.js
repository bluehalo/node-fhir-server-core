/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEndpoint = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific endpoint & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Endpoint = require(resolveFromVersion(version, 'base/Endpoint'));

		/**
		* return service.getEndpoint(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEndpoint(req, logger, context)
			.then((endpoints) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (endpoints) {
					for (let resource of endpoints) {
						if (!req.endpoint || req.endpoint === resource.endpointId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Endpoint(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Endpoint/${resource.id}`
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


module.exports.getEndpointById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific endpoint
		let Endpoint = require(resolveFromVersion(version, 'base/Endpoint'));

		return service.getEndpointById(req, logger, context)
			.then((endpoint) => {
				if (endpoint) {
					res.status(200).json(new Endpoint(endpoint));
				} else {
					next(errors.notFound('Endpoint not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
