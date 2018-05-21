/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getFlag = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific flag & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Flag = require(resolveFromVersion(version, 'base/Flag'));

		/**
		* return service.getFlag(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getFlag(req, logger, context)
			.then((flags) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (flags) {
					for (let resource of flags) {
						if (!req.flag || req.flag === resource.flagId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Flag(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Flag/${resource.id}`
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


module.exports.getFlagById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific flag
		let Flag = require(resolveFromVersion(version, 'base/Flag'));

		return service.getFlagById(req, logger, context)
			.then((flag) => {
				if (flag) {
					res.status(200).json(new Flag(flag));
				} else {
					next(errors.notFound('Flag not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
