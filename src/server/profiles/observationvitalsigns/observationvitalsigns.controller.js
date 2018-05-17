/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getObservationVitalSigns = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific obervationvitalsigns & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ObservationVitalSigns = require(resolveFromVersion(version, 'uscore/VitalSigns'));

		return service.getObservationVitalSigns(req.sanitized_args, logger)
			.then((observationvitalsignss) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observationvitalsignss) {
					for (let resource of observationvitalsignss) {
						if (!req.observationvitalsigns || req.observationvitalsigns === resource.observationvitalsignsId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ObservationVitalSigns(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/VitalSigns/${resource.id}`
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


module.exports.getObservationVitalSignsById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific obervationvitalsigns
		let ObservationVitalSigns = require(resolveFromVersion(version, 'uscore/VitalSigns'));

		return service.getObservationVitalSignsById(req.sanitized_args, logger)
			.then((observationvitalsigns) => {
				if (observationvitalsigns) {
					res.status(200).json(new ObservationVitalSigns(observationvitalsigns));
				} else {
					next(errors.notFound('VitalSigns not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
