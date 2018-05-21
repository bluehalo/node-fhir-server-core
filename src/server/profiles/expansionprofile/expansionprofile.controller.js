/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getExpansionProfile = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific expansionprofile & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ExpansionProfile = require(resolveFromVersion(version, 'base/ExpansionProfile'));

		/**
		* return service.getExpansionProfile(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getExpansionProfile(req, logger, context)
			.then((expansionprofiles) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (expansionprofiles) {
					for (let resource of expansionprofiles) {
						if (!req.expansionprofile || req.expansionprofile === resource.expansionprofileId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ExpansionProfile(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ExpansionProfile/${resource.id}`
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


module.exports.getExpansionProfileById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific expansionprofile
		let ExpansionProfile = require(resolveFromVersion(version, 'base/ExpansionProfile'));

		return service.getExpansionProfileById(req, logger, context)
			.then((expansionprofile) => {
				if (expansionprofile) {
					res.status(200).json(new ExpansionProfile(expansionprofile));
				} else {
					next(errors.notFound('ExpansionProfile not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
