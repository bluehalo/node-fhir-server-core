/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getStructureMap = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific structuremap & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let StructureMap = require(resolveFromVersion(version, 'base/StructureMap'));

		/**
		* return service.getStructureMap(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getStructureMap(req, logger, context)
			.then((structuremaps) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (structuremaps) {
					for (let resource of structuremaps) {
						if (!req.structuremap || req.structuremap === resource.structuremapId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new StructureMap(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/StructureMap/${resource.id}`
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


module.exports.getStructureMapById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific structuremap
		let StructureMap = require(resolveFromVersion(version, 'base/StructureMap'));

		return service.getStructureMapById(req, logger, context)
			.then((structuremap) => {
				if (structuremap) {
					res.status(200).json(new StructureMap(structuremap));
				} else {
					next(errors.notFound('StructureMap not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
