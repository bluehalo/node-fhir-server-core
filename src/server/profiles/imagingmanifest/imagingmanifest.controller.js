/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getImagingManifest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific imagingmanifest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ImagingManifest = require(resolveFromVersion(version, 'base/ImagingManifest'));

		/**
		* return service.getImagingManifest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getImagingManifest(req, logger, context)
			.then((imagingmanifests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (imagingmanifests) {
					for (let resource of imagingmanifests) {
						if (!req.imagingmanifest || req.imagingmanifest === resource.imagingmanifestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ImagingManifest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ImagingManifest/${resource.id}`
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


module.exports.getImagingManifestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific imagingmanifest
		let ImagingManifest = require(resolveFromVersion(version, 'base/ImagingManifest'));

		return service.getImagingManifestById(req, logger, context)
			.then((imagingmanifest) => {
				if (imagingmanifest) {
					res.status(200).json(new ImagingManifest(imagingmanifest));
				} else {
					next(errors.notFound('ImagingManifest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
