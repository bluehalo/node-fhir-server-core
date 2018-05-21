/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getQuestionnaire = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific questionnaire & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));

		/**
		* return service.getQuestionnaire(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getQuestionnaire(req, logger, context)
			.then((questionnaires) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (questionnaires) {
					for (let resource of questionnaires) {
						if (!req.questionnaire || req.questionnaire === resource.questionnaireId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Questionnaire(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Questionnaire/${resource.id}`
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


module.exports.getQuestionnaireById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific questionnaire
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));

		return service.getQuestionnaireById(req, logger, context)
			.then((questionnaire) => {
				if (questionnaire) {
					res.status(200).json(new Questionnaire(questionnaire));
				} else {
					next(errors.notFound('Questionnaire not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
