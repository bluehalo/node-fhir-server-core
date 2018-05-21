/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getBasic = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific basic & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Basic = require(resolveFromVersion(version, 'base/Basic'));

		/**
		* return service.getBasic(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getBasic(req, logger, context)
			.then((basics) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (basics) {
					for (let resource of basics) {
						if (!req.basic || req.basic === resource.basicId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Basic(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Basic/${resource.id}`
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


module.exports.getBasicById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific basic
		let Basic = require(resolveFromVersion(version, 'base/Basic'));

		return service.getBasicById(req, logger, context)
			.then((basic) => {
				if (basic) {
					res.status(200).json(new Basic(basic));
				} else {
					next(errors.notFound('Basic not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
