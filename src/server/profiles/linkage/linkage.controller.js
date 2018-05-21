/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getLinkage = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific linkage & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Linkage = require(resolveFromVersion(version, 'base/Linkage'));

		/**
		* return service.getLinkage(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getLinkage(req, logger, context)
			.then((linkages) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (linkages) {
					for (let resource of linkages) {
						if (!req.linkage || req.linkage === resource.linkageId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Linkage(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Linkage/${resource.id}`
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


module.exports.getLinkageById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific linkage
		let Linkage = require(resolveFromVersion(version, 'base/Linkage'));

		return service.getLinkageById(req, logger, context)
			.then((linkage) => {
				if (linkage) {
					res.status(200).json(new Linkage(linkage));
				} else {
					next(errors.notFound('Linkage not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
