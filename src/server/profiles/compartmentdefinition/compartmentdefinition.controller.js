/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCompartmentDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific compartmentdefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));

		/**
		* return service.getCompartmentDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCompartmentDefinition(req, logger, context)
			.then((compartmentdefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (compartmentdefinitions) {
					for (let resource of compartmentdefinitions) {
						if (!req.compartmentdefinition || req.compartmentdefinition === resource.compartmentdefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CompartmentDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CompartmentDefinition/${resource.id}`
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


module.exports.getCompartmentDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific compartmentdefinition
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));

		return service.getCompartmentDefinitionById(req, logger, context)
			.then((compartmentdefinition) => {
				if (compartmentdefinition) {
					res.status(200).json(new CompartmentDefinition(compartmentdefinition));
				} else {
					next(errors.notFound('CompartmentDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
