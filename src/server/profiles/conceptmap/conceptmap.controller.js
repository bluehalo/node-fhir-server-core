/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getConceptMap = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific conceptmap & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ConceptMap = require(resolveFromVersion(version, 'base/ConceptMap'));

		/**
		* return service.getConceptMap(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getConceptMap(req, logger, context)
			.then((conceptmaps) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (conceptmaps) {
					for (let resource of conceptmaps) {
						if (!req.conceptmap || req.conceptmap === resource.conceptmapId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ConceptMap(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ConceptMap/${resource.id}`
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


module.exports.getConceptMapById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific conceptmap
		let ConceptMap = require(resolveFromVersion(version, 'base/ConceptMap'));

		return service.getConceptMapById(req, logger, context)
			.then((conceptmap) => {
				if (conceptmap) {
					res.status(200).json(new ConceptMap(conceptmap));
				} else {
					next(errors.notFound('ConceptMap not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
