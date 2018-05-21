/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSchedule = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific schedule & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Schedule = require(resolveFromVersion(version, 'base/Schedule'));

		/**
		* return service.getSchedule(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSchedule(req, logger, context)
			.then((schedules) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (schedules) {
					for (let resource of schedules) {
						if (!req.schedule || req.schedule === resource.scheduleId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Schedule(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Schedule/${resource.id}`
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


module.exports.getScheduleById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific schedule
		let Schedule = require(resolveFromVersion(version, 'base/Schedule'));

		return service.getScheduleById(req, logger, context)
			.then((schedule) => {
				if (schedule) {
					res.status(200).json(new Schedule(schedule));
				} else {
					next(errors.notFound('Schedule not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
