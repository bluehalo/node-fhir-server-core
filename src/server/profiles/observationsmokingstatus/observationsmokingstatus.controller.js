const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getObservationSmokingStatus = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific observationsmokingstatus & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ObservationSmokingStatus = require(resolveFromVersion(version, 'uscore/SmokingStatus'));

		/**
		* return service.getObservationSmokingStatus(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservationSmokingStatus(req, logger, context)
			.then((observationsmokingstatuss) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observationsmokingstatuss) {
					for (let resource of observationsmokingstatuss) {
						if (!req.observationsmokingstatus || req.observationsmokingstatus === resource.observationsmokingstatusId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ObservationSmokingStatus(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/SmokingStatus/${resource.id}`
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


module.exports.getObservationSmokingStatusById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific observationsmokingstatus
		let ObservationSmokingStatus = require(resolveFromVersion(version, 'uscore/SmokingStatus'));

		return service.getObservationSmokingStatusById(req, logger, context)
			.then((observationsmokingstatus) => {
				if (observationsmokingstatus) {
					res.status(200).json(new ObservationSmokingStatus(observationsmokingstatus));
				} else {
					next(errors.notFound('SmokingStatus not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
