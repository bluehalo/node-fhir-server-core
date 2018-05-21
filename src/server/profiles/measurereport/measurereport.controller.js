/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMeasureReport = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific measurereport & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MeasureReport = require(resolveFromVersion(version, 'base/MeasureReport'));

		/**
		* return service.getMeasureReport(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMeasureReport(req, logger, context)
			.then((measurereports) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (measurereports) {
					for (let resource of measurereports) {
						if (!req.measurereport || req.measurereport === resource.measurereportId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MeasureReport(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MeasureReport/${resource.id}`
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


module.exports.getMeasureReportById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific measurereport
		let MeasureReport = require(resolveFromVersion(version, 'base/MeasureReport'));

		return service.getMeasureReportById(req, logger, context)
			.then((measurereport) => {
				if (measurereport) {
					res.status(200).json(new MeasureReport(measurereport));
				} else {
					next(errors.notFound('MeasureReport not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
