/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDeviceComponent = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicecomponent & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DeviceComponent = require(resolveFromVersion(version, 'base/DeviceComponent'));

		/**
		* return service.getDeviceComponent(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDeviceComponent(req, logger, context)
			.then((devicecomponents) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (devicecomponents) {
					for (let resource of devicecomponents) {
						if (!req.devicecomponent || req.devicecomponent === resource.devicecomponentId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DeviceComponent(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DeviceComponent/${resource.id}`
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


module.exports.getDeviceComponentById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicecomponent
		let DeviceComponent = require(resolveFromVersion(version, 'base/DeviceComponent'));

		return service.getDeviceComponentById(req, logger, context)
			.then((devicecomponent) => {
				if (devicecomponent) {
					res.status(200).json(new DeviceComponent(devicecomponent));
				} else {
					next(errors.notFound('DeviceComponent not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
