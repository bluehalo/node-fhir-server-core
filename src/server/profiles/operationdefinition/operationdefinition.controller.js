/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getOperationDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific operationdefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let OperationDefinition = require(resolveFromVersion(version, 'base/OperationDefinition'));

		/**
		* return service.getOperationDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getOperationDefinition(req, logger, context)
			.then((operationdefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (operationdefinitions) {
					for (let resource of operationdefinitions) {
						if (!req.operationdefinition || req.operationdefinition === resource.operationdefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new OperationDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/OperationDefinition/${resource.id}`
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


module.exports.getOperationDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific operationdefinition
		let OperationDefinition = require(resolveFromVersion(version, 'base/OperationDefinition'));

		return service.getOperationDefinitionById(req, logger, context)
			.then((operationdefinition) => {
				if (operationdefinition) {
					res.status(200).json(new OperationDefinition(operationdefinition));
				} else {
					next(errors.notFound('OperationDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
