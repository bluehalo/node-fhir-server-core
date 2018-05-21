/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getImplementationGuide = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific implementationguide & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ImplementationGuide = require(resolveFromVersion(version, 'base/ImplementationGuide'));

		/**
		* return service.getImplementationGuide(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getImplementationGuide(req, logger, context)
			.then((implementationguides) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (implementationguides) {
					for (let resource of implementationguides) {
						if (!req.implementationguide || req.implementationguide === resource.implementationguideId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ImplementationGuide(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ImplementationGuide/${resource.id}`
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


module.exports.getImplementationGuideById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific implementationguide
		let ImplementationGuide = require(resolveFromVersion(version, 'base/ImplementationGuide'));

		return service.getImplementationGuideById(req, logger, context)
			.then((implementationguide) => {
				if (implementationguide) {
					res.status(200).json(new ImplementationGuide(implementationguide));
				} else {
					next(errors.notFound('ImplementationGuide not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
