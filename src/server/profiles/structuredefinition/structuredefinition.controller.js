/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getStructureDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific structuredefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let StructureDefinition = require(resolveFromVersion(version, 'base/StructureDefinition'));

		/**
		* return service.getStructureDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getStructureDefinition(req, logger, context)
			.then((structuredefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (structuredefinitions) {
					for (let resource of structuredefinitions) {
						if (!req.structuredefinition || req.structuredefinition === resource.structuredefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new StructureDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/StructureDefinition/${resource.id}`
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


module.exports.getStructureDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific structuredefinition
		let StructureDefinition = require(resolveFromVersion(version, 'base/StructureDefinition'));

		return service.getStructureDefinitionById(req, logger, context)
			.then((structuredefinition) => {
				if (structuredefinition) {
					res.status(200).json(new StructureDefinition(structuredefinition));
				} else {
					next(errors.notFound('StructureDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
