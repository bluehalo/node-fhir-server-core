/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getProcessRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific processrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ProcessRequest = require(resolveFromVersion(version, 'base/ProcessRequest'));

		/**
		* return service.getProcessRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getProcessRequest(req, logger, context)
			.then((processrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (processrequests) {
					for (let resource of processrequests) {
						if (!req.processrequest || req.processrequest === resource.processrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ProcessRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ProcessRequest/${resource.id}`
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


module.exports.getProcessRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific processrequest
		let ProcessRequest = require(resolveFromVersion(version, 'base/ProcessRequest'));

		return service.getProcessRequestById(req, logger, context)
			.then((processrequest) => {
				if (processrequest) {
					res.status(200).json(new ProcessRequest(processrequest));
				} else {
					next(errors.notFound('ProcessRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
