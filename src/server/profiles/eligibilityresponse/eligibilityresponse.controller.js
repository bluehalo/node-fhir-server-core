/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEligibilityResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific eligibilityresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let EligibilityResponse = require(resolveFromVersion(version, 'base/EligibilityResponse'));

		/**
		* return service.getEligibilityResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEligibilityResponse(req, logger, context)
			.then((eligibilityresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (eligibilityresponses) {
					for (let resource of eligibilityresponses) {
						if (!req.eligibilityresponse || req.eligibilityresponse === resource.eligibilityresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new EligibilityResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/EligibilityResponse/${resource.id}`
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


module.exports.getEligibilityResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific eligibilityresponse
		let EligibilityResponse = require(resolveFromVersion(version, 'base/EligibilityResponse'));

		return service.getEligibilityResponseById(req, logger, context)
			.then((eligibilityresponse) => {
				if (eligibilityresponse) {
					res.status(200).json(new EligibilityResponse(eligibilityresponse));
				} else {
					next(errors.notFound('EligibilityResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
