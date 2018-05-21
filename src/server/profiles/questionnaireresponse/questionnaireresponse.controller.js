/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getQuestionnaireResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific questionnaireresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));

		/**
		* return service.getQuestionnaireResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getQuestionnaireResponse(req, logger, context)
			.then((questionnaireresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (questionnaireresponses) {
					for (let resource of questionnaireresponses) {
						if (!req.questionnaireresponse || req.questionnaireresponse === resource.questionnaireresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new QuestionnaireResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/QuestionnaireResponse/${resource.id}`
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


module.exports.getQuestionnaireResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific questionnaireresponse
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));

		return service.getQuestionnaireResponseById(req, logger, context)
			.then((questionnaireresponse) => {
				if (questionnaireresponse) {
					res.status(200).json(new QuestionnaireResponse(questionnaireresponse));
				} else {
					next(errors.notFound('QuestionnaireResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
