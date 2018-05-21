/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationAdministration = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationadministration & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));

		/**
		* return service.getMedicationAdministration(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationAdministration(req, logger, context)
			.then((medicationadministrations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (medicationadministrations) {
					for (let resource of medicationadministrations) {
						if (!req.medicationadministration || req.medicationadministration === resource.medicationadministrationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MedicationAdministration(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MedicationAdministration/${resource.id}`
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


module.exports.getMedicationAdministrationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationadministration
		let MedicationAdministration = require(resolveFromVersion(version, 'base/MedicationAdministration'));

		return service.getMedicationAdministrationById(req, logger, context)
			.then((medicationadministration) => {
				if (medicationadministration) {
					res.status(200).json(new MedicationAdministration(medicationadministration));
				} else {
					next(errors.notFound('MedicationAdministration not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
