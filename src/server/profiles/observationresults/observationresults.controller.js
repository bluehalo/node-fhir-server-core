/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getObservationResults = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific observationresults & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ObservationResults = require(resolveFromVersion(version, 'uscore/Results'));

		return service.getObservationResults(req.sanitized_args, logger)
			.then((observationresultss) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observationresultss) {
					for (let resource of observationresultss) {
						if (!req.observationresults || req.observationresults === resource.observationresultsId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ObservationResults(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Results/${resource.id}`
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


module.exports.getObservationResultsById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific observationresults
		let ObservationResults = require(resolveFromVersion(version, 'uscore/Results'));

		return service.getObservationResultsById(req.sanitized_args, logger)
			.then((observationresults) => {
				if (observationresults) {
					res.status(200).json(new ObservationResults(observationresults));
				} else {
					next(errors.notFound('Results not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
