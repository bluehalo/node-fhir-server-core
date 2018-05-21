/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMessageDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific messagedefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MessageDefinition = require(resolveFromVersion(version, 'base/MessageDefinition'));

		/**
		* return service.getMessageDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMessageDefinition(req, logger, context)
			.then((messagedefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (messagedefinitions) {
					for (let resource of messagedefinitions) {
						if (!req.messagedefinition || req.messagedefinition === resource.messagedefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MessageDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MessageDefinition/${resource.id}`
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


module.exports.getMessageDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific messagedefinition
		let MessageDefinition = require(resolveFromVersion(version, 'base/MessageDefinition'));

		return service.getMessageDefinitionById(req, logger, context)
			.then((messagedefinition) => {
				if (messagedefinition) {
					res.status(200).json(new MessageDefinition(messagedefinition));
				} else {
					next(errors.notFound('MessageDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
