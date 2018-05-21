/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getRequestGroup = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific requestgroup & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let RequestGroup = require(resolveFromVersion(version, 'base/RequestGroup'));

		/**
		* return service.getRequestGroup(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getRequestGroup(req, logger, context)
			.then((requestgroups) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (requestgroups) {
					for (let resource of requestgroups) {
						if (!req.requestgroup || req.requestgroup === resource.requestgroupId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new RequestGroup(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/RequestGroup/${resource.id}`
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


module.exports.getRequestGroupById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific requestgroup
		let RequestGroup = require(resolveFromVersion(version, 'base/RequestGroup'));

		return service.getRequestGroupById(req, logger, context)
			.then((requestgroup) => {
				if (requestgroup) {
					res.status(200).json(new RequestGroup(requestgroup));
				} else {
					next(errors.notFound('RequestGroup not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
