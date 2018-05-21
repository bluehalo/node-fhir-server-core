/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCodeSystem = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific codesystem & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CodeSystem = require(resolveFromVersion(version, 'base/CodeSystem'));

		/**
		* return service.getCodeSystem(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCodeSystem(req, logger, context)
			.then((codesystems) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (codesystems) {
					for (let resource of codesystems) {
						if (!req.codesystem || req.codesystem === resource.codesystemId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CodeSystem(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CodeSystem/${resource.id}`
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


module.exports.getCodeSystemById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific codesystem
		let CodeSystem = require(resolveFromVersion(version, 'base/CodeSystem'));

		return service.getCodeSystemById(req, logger, context)
			.then((codesystem) => {
				if (codesystem) {
					res.status(200).json(new CodeSystem(codesystem));
				} else {
					next(errors.notFound('CodeSystem not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
