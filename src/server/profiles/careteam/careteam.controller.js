/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCareTeam = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific careteam & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));

		/**
		* return service.getCareTeam(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCareTeam(req, logger, context)
			.then((careteams) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (careteams) {
					for (let resource of careteams) {
						if (!req.careteam || req.careteam === resource.careteamId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CareTeam(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CareTeam/${resource.id}`
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


module.exports.getCareTeamById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific careteam
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));

		return service.getCareTeamById(req, logger, context)
			.then((careteam) => {
				if (careteam) {
					res.status(200).json(new CareTeam(careteam));
				} else {
					next(errors.notFound('CareTeam not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
