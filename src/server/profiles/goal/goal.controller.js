/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getGoal = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific goal & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));

		return service.getGoal(req.sanitized_args, logger)
			.then((goals) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (goals) {
					for (let resource of goals) {
						if (!req.goal || req.goal === resource.goalId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								'search': {
									'mode': 'match'
								},
								'resource': new Goal(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Goal/${resource.id}`
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


module.exports.getGoalById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific goal
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));

		return service.getGoalById(req.sanitized_args, logger)
			.then((goal) => {
				if (goal) {
					res.status(200).json(new Goal(goal));
				} else {
					next(errors.notFound('Goal not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
