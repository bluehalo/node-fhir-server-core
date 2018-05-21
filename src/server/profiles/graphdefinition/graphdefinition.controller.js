/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getGraphDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific graphdefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let GraphDefinition = require(resolveFromVersion(version, 'base/GraphDefinition'));

		/**
		* return service.getGraphDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getGraphDefinition(req, logger, context)
			.then((graphdefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (graphdefinitions) {
					for (let resource of graphdefinitions) {
						if (!req.graphdefinition || req.graphdefinition === resource.graphdefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new GraphDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/GraphDefinition/${resource.id}`
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


module.exports.getGraphDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific graphdefinition
		let GraphDefinition = require(resolveFromVersion(version, 'base/GraphDefinition'));

		return service.getGraphDefinitionById(req, logger, context)
			.then((graphdefinition) => {
				if (graphdefinition) {
					res.status(200).json(new GraphDefinition(graphdefinition));
				} else {
					next(errors.notFound('GraphDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
