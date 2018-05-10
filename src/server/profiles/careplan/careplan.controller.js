/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCarePlan = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific careplan & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));

		/**
		* return service.getCarePlan(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCarePlan(req, logger, context)
			.then((careplans) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (careplans) {
					for (let resource of careplans) {
						if (!req.careplan || req.careplan === resource.careplanId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CarePlan(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CarePlan/${resource.id}`
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


module.exports.getCarePlanById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific careplan
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));

		return service.getCarePlanById(req, logger, context)
			.then((careplan) => {
				if (careplan) {
					res.status(200).json(new CarePlan(careplan));
				} else {
					next(errors.notFound('CarePlan not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
