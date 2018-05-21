/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCapabilityStatement = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific capabilitystatement & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));

		/**
		* return service.getCapabilityStatement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCapabilityStatement(req, logger, context)
			.then((capabilitystatements) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (capabilitystatements) {
					for (let resource of capabilitystatements) {
						if (!req.capabilitystatement || req.capabilitystatement === resource.capabilitystatementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CapabilityStatement(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CapabilityStatement/${resource.id}`
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


module.exports.getCapabilityStatementById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific capabilitystatement
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));

		return service.getCapabilityStatementById(req, logger, context)
			.then((capabilitystatement) => {
				if (capabilitystatement) {
					res.status(200).json(new CapabilityStatement(capabilitystatement));
				} else {
					next(errors.notFound('CapabilityStatement not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
