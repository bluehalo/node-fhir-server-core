/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getExplanationOfBenefit = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific explanationofbenefit & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'base/ExplanationOfBenefit'));

		/**
		* return service.getExplanationOfBenefit(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getExplanationOfBenefit(req, logger, context)
			.then((explanationofbenefits) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (explanationofbenefits) {
					for (let resource of explanationofbenefits) {
						if (!req.explanationofbenefit || req.explanationofbenefit === resource.explanationofbenefitId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ExplanationOfBenefit(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ExplanationOfBenefit/${resource.id}`
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


module.exports.getExplanationOfBenefitById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific explanationofbenefit
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'base/ExplanationOfBenefit'));

		return service.getExplanationOfBenefitById(req, logger, context)
			.then((explanationofbenefit) => {
				if (explanationofbenefit) {
					res.status(200).json(new ExplanationOfBenefit(explanationofbenefit));
				} else {
					next(errors.notFound('ExplanationOfBenefit not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
