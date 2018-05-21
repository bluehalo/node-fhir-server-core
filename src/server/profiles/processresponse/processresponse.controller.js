/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getProcessResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific processresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ProcessResponse = require(resolveFromVersion(version, 'base/ProcessResponse'));

		/**
		* return service.getProcessResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getProcessResponse(req, logger, context)
			.then((processresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (processresponses) {
					for (let resource of processresponses) {
						if (!req.processresponse || req.processresponse === resource.processresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ProcessResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ProcessResponse/${resource.id}`
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


module.exports.getProcessResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific processresponse
		let ProcessResponse = require(resolveFromVersion(version, 'base/ProcessResponse'));

		return service.getProcessResponseById(req, logger, context)
			.then((processresponse) => {
				if (processresponse) {
					res.status(200).json(new ProcessResponse(processresponse));
				} else {
					next(errors.notFound('ProcessResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
