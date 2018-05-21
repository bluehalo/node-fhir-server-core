/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDocumentManifest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific documentmanifest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DocumentManifest = require(resolveFromVersion(version, 'base/DocumentManifest'));

		/**
		* return service.getDocumentManifest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDocumentManifest(req, logger, context)
			.then((documentmanifests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (documentmanifests) {
					for (let resource of documentmanifests) {
						if (!req.documentmanifest || req.documentmanifest === resource.documentmanifestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DocumentManifest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DocumentManifest/${resource.id}`
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


module.exports.getDocumentManifestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific documentmanifest
		let DocumentManifest = require(resolveFromVersion(version, 'base/DocumentManifest'));

		return service.getDocumentManifestById(req, logger, context)
			.then((documentmanifest) => {
				if (documentmanifest) {
					res.status(200).json(new DocumentManifest(documentmanifest));
				} else {
					next(errors.notFound('DocumentManifest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
