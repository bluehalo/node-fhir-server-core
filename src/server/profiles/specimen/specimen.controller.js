/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSpecimen = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific specimen & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Specimen = require(resolveFromVersion(version, 'base/Specimen'));

		/**
		* return service.getSpecimen(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSpecimen(req, logger, context)
			.then((specimens) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (specimens) {
					for (let resource of specimens) {
						if (!req.specimen || req.specimen === resource.specimenId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Specimen(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Specimen/${resource.id}`
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


module.exports.getSpecimenById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific specimen
		let Specimen = require(resolveFromVersion(version, 'base/Specimen'));

		return service.getSpecimenById(req, logger, context)
			.then((specimen) => {
				if (specimen) {
					res.status(200).json(new Specimen(specimen));
				} else {
					next(errors.notFound('Specimen not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
