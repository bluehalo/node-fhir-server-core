/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getClaimResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific claimresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ClaimResponse = require(resolveFromVersion(version, 'base/ClaimResponse'));

		/**
		* return service.getClaimResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getClaimResponse(req, logger, context)
			.then((claimresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (claimresponses) {
					for (let resource of claimresponses) {
						if (!req.claimresponse || req.claimresponse === resource.claimresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ClaimResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ClaimResponse/${resource.id}`
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


module.exports.getClaimResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific claimresponse
		let ClaimResponse = require(resolveFromVersion(version, 'base/ClaimResponse'));

		return service.getClaimResponseById(req, logger, context)
			.then((claimresponse) => {
				if (claimresponse) {
					res.status(200).json(new ClaimResponse(claimresponse));
				} else {
					next(errors.notFound('ClaimResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
