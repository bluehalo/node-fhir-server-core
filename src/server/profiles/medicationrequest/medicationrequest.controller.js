/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		/**
		* return service.getMedicationRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationRequest(req, logger, context)
			.then((medicationrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (medicationrequests) {
					for (let resource of medicationrequests) {
						if (!req.medicationrequest || req.medicationrequest === resource.medicationrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MedicationRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MedicationRequest/${resource.id}`
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


module.exports.getMedicationRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific medicationrequest
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequestById(req, logger, context)
			.then((medicationrequest) => {
				if (medicationrequest) {
					res.status(200).json(new MedicationRequest(medicationrequest));
				} else {
					next(errors.notFound('MedicationRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
