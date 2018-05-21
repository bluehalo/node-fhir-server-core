/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getVisionPrescription = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific visionprescription & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));

		/**
		* return service.getVisionPrescription(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getVisionPrescription(req, logger, context)
			.then((visionprescriptions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (visionprescriptions) {
					for (let resource of visionprescriptions) {
						if (!req.visionprescription || req.visionprescription === resource.visionprescriptionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new VisionPrescription(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/VisionPrescription/${resource.id}`
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


module.exports.getVisionPrescriptionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific visionprescription
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));

		return service.getVisionPrescriptionById(req, logger, context)
			.then((visionprescription) => {
				if (visionprescription) {
					res.status(200).json(new VisionPrescription(visionprescription));
				} else {
					next(errors.notFound('VisionPrescription not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
