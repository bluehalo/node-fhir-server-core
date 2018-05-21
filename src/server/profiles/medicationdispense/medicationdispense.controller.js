/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationDispense = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationdispense & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MedicationDispense = require(resolveFromVersion(version, 'base/MedicationDispense'));

		/**
		* return service.getMedicationDispense(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationDispense(req, logger, context)
			.then((medicationdispenses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (medicationdispenses) {
					for (let resource of medicationdispenses) {
						if (!req.medicationdispense || req.medicationdispense === resource.medicationdispenseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MedicationDispense(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MedicationDispense/${resource.id}`
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


module.exports.getMedicationDispenseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationdispense
		let MedicationDispense = require(resolveFromVersion(version, 'base/MedicationDispense'));

		return service.getMedicationDispenseById(req, logger, context)
			.then((medicationdispense) => {
				if (medicationdispense) {
					res.status(200).json(new MedicationDispense(medicationdispense));
				} else {
					next(errors.notFound('MedicationDispense not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
