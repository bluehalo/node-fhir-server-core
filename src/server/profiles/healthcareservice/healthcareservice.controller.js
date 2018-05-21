/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getHealthcareService = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific healthcareservice & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));

		/**
		* return service.getHealthcareService(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getHealthcareService(req, logger, context)
			.then((healthcareservices) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (healthcareservices) {
					for (let resource of healthcareservices) {
						if (!req.healthcareservice || req.healthcareservice === resource.healthcareserviceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new HealthcareService(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/HealthcareService/${resource.id}`
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


module.exports.getHealthcareServiceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific healthcareservice
		let HealthcareService = require(resolveFromVersion(version, 'base/HealthcareService'));

		return service.getHealthcareServiceById(req, logger, context)
			.then((healthcareservice) => {
				if (healthcareservice) {
					res.status(200).json(new HealthcareService(healthcareservice));
				} else {
					next(errors.notFound('HealthcareService not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
