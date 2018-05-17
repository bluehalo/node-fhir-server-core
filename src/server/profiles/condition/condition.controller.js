/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCondition = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific condition & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));

		return service.getCondition(req.sanitized_args, logger)
			.then((conditions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (conditions) {
					for (let resource of conditions) {
						if (!req.condition || req.condition === resource.conditionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Condition(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Condition/${resource.id}`
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


module.exports.getConditionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific condition
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));

		return service.getConditionById(req.sanitized_args, logger)
			.then((condition) => {
				if (condition) {
					res.status(200).json(new Condition(condition));
				} else {
					next(errors.notFound('Condition not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
