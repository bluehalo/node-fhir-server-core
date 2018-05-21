/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getServiceDefinition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific servicedefinition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ServiceDefinition = require(resolveFromVersion(version, 'base/ServiceDefinition'));

		/**
		* return service.getServiceDefinition(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getServiceDefinition(req, logger, context)
			.then((servicedefinitions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (servicedefinitions) {
					for (let resource of servicedefinitions) {
						if (!req.servicedefinition || req.servicedefinition === resource.servicedefinitionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ServiceDefinition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ServiceDefinition/${resource.id}`
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


module.exports.getServiceDefinitionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific servicedefinition
		let ServiceDefinition = require(resolveFromVersion(version, 'base/ServiceDefinition'));

		return service.getServiceDefinitionById(req, logger, context)
			.then((servicedefinition) => {
				if (servicedefinition) {
					res.status(200).json(new ServiceDefinition(servicedefinition));
				} else {
					next(errors.notFound('ServiceDefinition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
