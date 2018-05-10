/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationStatement = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationstatement & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));

		/**
		* return service.getMedicationStatement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationStatement(req, logger, context)
			.then((medicationstatements) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (medicationstatements) {
					for (let resource of medicationstatements) {
						if (!req.medicationstatement || req.medicationstatement === resource.medicationstatementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MedicationStatement(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MedicationStatement/${resource.id}`
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


module.exports.getMedicationStatementById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationstatement
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));

		return service.getMedicationStatementById(req, logger, context)
			.then((medicationstatement) => {
				if (medicationstatement) {
					res.status(200).json(new MedicationStatement(medicationstatement));
				} else {
					next(errors.notFound('MedicationStatement not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
