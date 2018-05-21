/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getReferralRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific referralrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ReferralRequest = require(resolveFromVersion(version, 'base/ReferralRequest'));

		/**
		* return service.getReferralRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getReferralRequest(req, logger, context)
			.then((referralrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (referralrequests) {
					for (let resource of referralrequests) {
						if (!req.referralrequest || req.referralrequest === resource.referralrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ReferralRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ReferralRequest/${resource.id}`
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


module.exports.getReferralRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific referralrequest
		let ReferralRequest = require(resolveFromVersion(version, 'base/ReferralRequest'));

		return service.getReferralRequestById(req, logger, context)
			.then((referralrequest) => {
				if (referralrequest) {
					res.status(200).json(new ReferralRequest(referralrequest));
				} else {
					next(errors.notFound('ReferralRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
