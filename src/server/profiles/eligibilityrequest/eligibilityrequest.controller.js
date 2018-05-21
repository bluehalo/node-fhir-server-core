/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEligibilityRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific eligibilityrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let EligibilityRequest = require(resolveFromVersion(version, 'base/EligibilityRequest'));

		/**
		* return service.getEligibilityRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEligibilityRequest(req, logger, context)
			.then((eligibilityrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (eligibilityrequests) {
					for (let resource of eligibilityrequests) {
						if (!req.eligibilityrequest || req.eligibilityrequest === resource.eligibilityrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new EligibilityRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/EligibilityRequest/${resource.id}`
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


module.exports.getEligibilityRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific eligibilityrequest
		let EligibilityRequest = require(resolveFromVersion(version, 'base/EligibilityRequest'));

		return service.getEligibilityRequestById(req, logger, context)
			.then((eligibilityrequest) => {
				if (eligibilityrequest) {
					res.status(200).json(new EligibilityRequest(eligibilityrequest));
				} else {
					next(errors.notFound('EligibilityRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
