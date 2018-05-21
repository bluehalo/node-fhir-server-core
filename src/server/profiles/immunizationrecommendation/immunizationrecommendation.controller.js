/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getImmunizationRecommendation = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific immunizationrecommendation & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));

		/**
		* return service.getImmunizationRecommendation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getImmunizationRecommendation(req, logger, context)
			.then((immunizationrecommendations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (immunizationrecommendations) {
					for (let resource of immunizationrecommendations) {
						if (!req.immunizationrecommendation || req.immunizationrecommendation === resource.immunizationrecommendationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ImmunizationRecommendation(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ImmunizationRecommendation/${resource.id}`
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


module.exports.getImmunizationRecommendationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific immunizationrecommendation
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));

		return service.getImmunizationRecommendationById(req, logger, context)
			.then((immunizationrecommendation) => {
				if (immunizationrecommendation) {
					res.status(200).json(new ImmunizationRecommendation(immunizationrecommendation));
				} else {
					next(errors.notFound('ImmunizationRecommendation not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
