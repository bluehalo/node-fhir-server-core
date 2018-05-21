/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getTestScript = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific testscript & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let TestScript = require(resolveFromVersion(version, 'base/TestScript'));

		/**
		* return service.getTestScript(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getTestScript(req, logger, context)
			.then((testscripts) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (testscripts) {
					for (let resource of testscripts) {
						if (!req.testscript || req.testscript === resource.testscriptId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new TestScript(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/TestScript/${resource.id}`
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


module.exports.getTestScriptById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific testscript
		let TestScript = require(resolveFromVersion(version, 'base/TestScript'));

		return service.getTestScriptById(req, logger, context)
			.then((testscript) => {
				if (testscript) {
					res.status(200).json(new TestScript(testscript));
				} else {
					next(errors.notFound('TestScript not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
