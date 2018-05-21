/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getActivityDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific activitydefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ActivityDefinition = require(resolveFromVersion(version, 'base/ActivityDefinition'));

		/**
		* return service.getActivityDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getActivityDefinition(req, logger, context)
			.then((activitydefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (activitydefinitions) {
					for (let resource of activitydefinitions) {
						if (!req.activitydefinition || req.activitydefinition === resource.activitydefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ActivityDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ActivityDefinition/${resource.id}`
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


module.exports.getActivityDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific activitydefinition
		let ActivityDefinition = require(resolveFromVersion(version, 'base/ActivityDefinition'));

		return service.getActivityDefinitionById(req, logger, context)
			.then((activitydefinition) => {
				if (activitydefinition) {
					res.status(200).json(new ActivityDefinition(activitydefinition));
				} else {
					next(errors.notFound('ActivityDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
