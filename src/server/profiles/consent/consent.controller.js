/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getConsent = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific consent & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Consent = require(resolveFromVersion(version, 'base/Consent'));

		/**
		* return service.getConsent(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getConsent(req, logger, context)
			.then((consents) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (consents) {
					for (let resource of consents) {
						if (!req.consent || req.consent === resource.consentId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Consent(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Consent/${resource.id}`
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


module.exports.getConsentById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific consent
		let Consent = require(resolveFromVersion(version, 'base/Consent'));

		return service.getConsentById(req, logger, context)
			.then((consent) => {
				if (consent) {
					res.status(200).json(new Consent(consent));
				} else {
					next(errors.notFound('Consent not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
