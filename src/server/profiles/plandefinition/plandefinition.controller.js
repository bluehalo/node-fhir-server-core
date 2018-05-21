/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPlanDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific plandefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let PlanDefinition = require(resolveFromVersion(version, 'base/PlanDefinition'));

		/**
		* return service.getPlanDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPlanDefinition(req, logger, context)
			.then((plandefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (plandefinitions) {
					for (let resource of plandefinitions) {
						if (!req.plandefinition || req.plandefinition === resource.plandefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new PlanDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/PlanDefinition/${resource.id}`
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


module.exports.getPlanDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific plandefinition
		let PlanDefinition = require(resolveFromVersion(version, 'base/PlanDefinition'));

		return service.getPlanDefinitionById(req, logger, context)
			.then((plandefinition) => {
				if (plandefinition) {
					res.status(200).json(new PlanDefinition(plandefinition));
				} else {
					next(errors.notFound('PlanDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
