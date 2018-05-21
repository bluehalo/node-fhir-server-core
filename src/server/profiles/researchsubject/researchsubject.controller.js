/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getResearchSubject = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific researchsubject & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ResearchSubject = require(resolveFromVersion(version, 'base/ResearchSubject'));

		/**
		* return service.getResearchSubject(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getResearchSubject(req, logger, context)
			.then((researchsubjects) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (researchsubjects) {
					for (let resource of researchsubjects) {
						if (!req.researchsubject || req.researchsubject === resource.researchsubjectId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ResearchSubject(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ResearchSubject/${resource.id}`
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


module.exports.getResearchSubjectById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific researchsubject
		let ResearchSubject = require(resolveFromVersion(version, 'base/ResearchSubject'));

		return service.getResearchSubjectById(req, logger, context)
			.then((researchsubject) => {
				if (researchsubject) {
					res.status(200).json(new ResearchSubject(researchsubject));
				} else {
					next(errors.notFound('ResearchSubject not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
