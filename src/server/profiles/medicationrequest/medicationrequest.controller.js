/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMedicationRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific medicationrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequest(req.sanitized_args, logger)
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
		let { version } = req.sanitized_args;
		// Get a version specific medicationrequest
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));

		return service.getMedicationRequestById(req.sanitized_args, logger)
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
