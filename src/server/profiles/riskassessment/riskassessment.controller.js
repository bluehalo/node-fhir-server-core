/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getRiskAssessment = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific riskassessment & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let RiskAssessment = require(resolveFromVersion(version, 'base/RiskAssessment'));

		/**
		* return service.getRiskAssessment(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getRiskAssessment(req, logger, context)
			.then((riskassessments) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (riskassessments) {
					for (let resource of riskassessments) {
						if (!req.riskassessment || req.riskassessment === resource.riskassessmentId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new RiskAssessment(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/RiskAssessment/${resource.id}`
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


module.exports.getRiskAssessmentById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific riskassessment
		let RiskAssessment = require(resolveFromVersion(version, 'base/RiskAssessment'));

		return service.getRiskAssessmentById(req, logger, context)
			.then((riskassessment) => {
				if (riskassessment) {
					res.status(200).json(new RiskAssessment(riskassessment));
				} else {
					next(errors.notFound('RiskAssessment not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
