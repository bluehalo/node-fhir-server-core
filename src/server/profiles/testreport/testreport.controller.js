/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getTestReport = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific testreport & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let TestReport = require(resolveFromVersion(version, 'base/TestReport'));

		/**
		* return service.getTestReport(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getTestReport(req, logger, context)
			.then((testreports) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (testreports) {
					for (let resource of testreports) {
						if (!req.testreport || req.testreport === resource.testreportId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new TestReport(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/TestReport/${resource.id}`
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


module.exports.getTestReportById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific testreport
		let TestReport = require(resolveFromVersion(version, 'base/TestReport'));

		return service.getTestReportById(req, logger, context)
			.then((testreport) => {
				if (testreport) {
					res.status(200).json(new TestReport(testreport));
				} else {
					next(errors.notFound('TestReport not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
