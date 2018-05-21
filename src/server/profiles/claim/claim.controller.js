/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getClaim = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific claim & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Claim = require(resolveFromVersion(version, 'base/Claim'));

		/**
		* return service.getClaim(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getClaim(req, logger, context)
			.then((claims) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (claims) {
					for (let resource of claims) {
						if (!req.claim || req.claim === resource.claimId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Claim(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Claim/${resource.id}`
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


module.exports.getClaimById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific claim
		let Claim = require(resolveFromVersion(version, 'base/Claim'));

		return service.getClaimById(req, logger, context)
			.then((claim) => {
				if (claim) {
					res.status(200).json(new Claim(claim));
				} else {
					next(errors.notFound('Claim not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
