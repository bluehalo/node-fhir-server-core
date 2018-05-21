/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDeviceRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicerequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DeviceRequest = require(resolveFromVersion(version, 'base/DeviceRequest'));

		/**
		* return service.getDeviceRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDeviceRequest(req, logger, context)
			.then((devicerequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (devicerequests) {
					for (let resource of devicerequests) {
						if (!req.devicerequest || req.devicerequest === resource.devicerequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DeviceRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DeviceRequest/${resource.id}`
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


module.exports.getDeviceRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicerequest
		let DeviceRequest = require(resolveFromVersion(version, 'base/DeviceRequest'));

		return service.getDeviceRequestById(req, logger, context)
			.then((devicerequest) => {
				if (devicerequest) {
					res.status(200).json(new DeviceRequest(devicerequest));
				} else {
					next(errors.notFound('DeviceRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
