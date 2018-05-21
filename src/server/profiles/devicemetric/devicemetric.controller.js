/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDeviceMetric = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicemetric & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DeviceMetric = require(resolveFromVersion(version, 'base/DeviceMetric'));

		/**
		* return service.getDeviceMetric(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDeviceMetric(req, logger, context)
			.then((devicemetrics) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (devicemetrics) {
					for (let resource of devicemetrics) {
						if (!req.devicemetric || req.devicemetric === resource.devicemetricId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DeviceMetric(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DeviceMetric/${resource.id}`
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


module.exports.getDeviceMetricById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicemetric
		let DeviceMetric = require(resolveFromVersion(version, 'base/DeviceMetric'));

		return service.getDeviceMetricById(req, logger, context)
			.then((devicemetric) => {
				if (devicemetric) {
					res.status(200).json(new DeviceMetric(devicemetric));
				} else {
					next(errors.notFound('DeviceMetric not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
