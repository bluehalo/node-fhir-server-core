/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getImagingStudy = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific imagingstudy & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));

		/**
		* return service.getImagingStudy(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getImagingStudy(req, logger, context)
			.then((imagingstudys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (imagingstudys) {
					for (let resource of imagingstudys) {
						if (!req.imagingstudy || req.imagingstudy === resource.imagingstudyId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ImagingStudy(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ImagingStudy/${resource.id}`
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


module.exports.getImagingStudyById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific imagingstudy
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));

		return service.getImagingStudyById(req, logger, context)
			.then((imagingstudy) => {
				if (imagingstudy) {
					res.status(200).json(new ImagingStudy(imagingstudy));
				} else {
					next(errors.notFound('ImagingStudy not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
