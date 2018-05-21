/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getRelatedPerson = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific relatedperson & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let RelatedPerson = require(resolveFromVersion(version, 'base/RelatedPerson'));

		/**
		* return service.getRelatedPerson(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getRelatedPerson(req, logger, context)
			.then((relatedpersons) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (relatedpersons) {
					for (let resource of relatedpersons) {
						if (!req.relatedperson || req.relatedperson === resource.relatedpersonId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new RelatedPerson(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/RelatedPerson/${resource.id}`
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


module.exports.getRelatedPersonById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific relatedperson
		let RelatedPerson = require(resolveFromVersion(version, 'base/RelatedPerson'));

		return service.getRelatedPersonById(req, logger, context)
			.then((relatedperson) => {
				if (relatedperson) {
					res.status(200).json(new RelatedPerson(relatedperson));
				} else {
					next(errors.notFound('RelatedPerson not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
