/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getImmunization = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific immunization & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));

		return service.getImmunization(req.sanitized_args, logger)
			.then((immunizations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (immunizations) {
					for (let resource of immunizations) {
						if (!req.immunization || req.immunization === resource.immunizationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Immunization(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Immunization/${resource.id}`
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


module.exports.getImmunizationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));

		return service.getImmunizationById(req.sanitized_args, logger)
			.then((immunization) => {
				if (immunization) {
					res.status(200).json(new Immunization(immunization));
				} else {
					next(errors.notFound('Immunization not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
