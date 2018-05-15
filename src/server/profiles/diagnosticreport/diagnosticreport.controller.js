/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDiagnosticReport = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific diagnosticreport & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));

		/**
		* return service.getDiagnosticReport(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDiagnosticReport(req, logger, context)
			.then((diagnosticreports) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (diagnosticreports) {
					for (let resource of diagnosticreports) {
						if (!req.diagnosticreport || req.diagnosticreport === resource.diagnosticreportId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DiagnosticReport(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DiagnosticReport/${resource.id}`
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


module.exports.getDiagnosticReportById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific diagnosticreport
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));

		return service.getDiagnosticReportById(req, logger, context)
			.then((diagnosticreport) => {
				if (diagnosticreport) {
					res.status(200).json(new DiagnosticReport(diagnosticreport));
				} else {
					next(errors.notFound('DiagnosticReport not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
