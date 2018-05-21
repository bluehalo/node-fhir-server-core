/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getBinary = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific binary & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Binary = require(resolveFromVersion(version, 'base/Binary'));

		/**
		* return service.getBinary(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getBinary(req, logger, context)
			.then((binarys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (binarys) {
					for (let resource of binarys) {
						if (!req.binary || req.binary === resource.binaryId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Binary(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Binary/${resource.id}`
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


module.exports.getBinaryById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific binary
		let Binary = require(resolveFromVersion(version, 'base/Binary'));

		return service.getBinaryById(req, logger, context)
			.then((binary) => {
				if (binary) {
					res.status(200).json(new Binary(binary));
				} else {
					next(errors.notFound('Binary not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
