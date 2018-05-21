/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getResearchStudy = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific researchstudy & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ResearchStudy = require(resolveFromVersion(version, 'base/ResearchStudy'));

		/**
		* return service.getResearchStudy(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getResearchStudy(req, logger, context)
			.then((researchstudys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (researchstudys) {
					for (let resource of researchstudys) {
						if (!req.researchstudy || req.researchstudy === resource.researchstudyId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ResearchStudy(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ResearchStudy/${resource.id}`
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


module.exports.getResearchStudyById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific researchstudy
		let ResearchStudy = require(resolveFromVersion(version, 'base/ResearchStudy'));

		return service.getResearchStudyById(req, logger, context)
			.then((researchstudy) => {
				if (researchstudy) {
					res.status(200).json(new ResearchStudy(researchstudy));
				} else {
					next(errors.notFound('ResearchStudy not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
