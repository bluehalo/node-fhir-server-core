/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getProvenance = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific provenance & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Provenance = require(resolveFromVersion(version, 'base/Provenance'));

		/**
		* return service.getProvenance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getProvenance(req, logger, context)
			.then((provenances) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (provenances) {
					for (let resource of provenances) {
						if (!req.provenance || req.provenance === resource.provenanceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Provenance(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Provenance/${resource.id}`
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


module.exports.getProvenanceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific provenance
		let Provenance = require(resolveFromVersion(version, 'base/Provenance'));

		return service.getProvenanceById(req, logger, context)
			.then((provenance) => {
				if (provenance) {
					res.status(200).json(new Provenance(provenance));
				} else {
					next(errors.notFound('Provenance not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
