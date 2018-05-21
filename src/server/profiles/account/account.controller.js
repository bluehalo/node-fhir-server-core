/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAccount = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific account & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Account = require(resolveFromVersion(version, 'base/Account'));

		/**
		* return service.getAccount(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAccount(req, logger, context)
			.then((accounts) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (accounts) {
					for (let resource of accounts) {
						if (!req.account || req.account === resource.accountId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Account(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Account/${resource.id}`
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


module.exports.getAccountById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific account
		let Account = require(resolveFromVersion(version, 'base/Account'));

		return service.getAccountById(req, logger, context)
			.then((account) => {
				if (account) {
					res.status(200).json(new Account(account));
				} else {
					next(errors.notFound('Account not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
