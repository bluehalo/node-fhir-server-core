const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDevice = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific device
		let { Device } = require(resolveFromVersion(version, 'uscore/resources/Device'));

		/**
		* return service.getDevice(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDevice(req, logger, context)
			.then((devices) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (devices) {
					for (let resource of devices) {
						if (!req.device || req.device === resource.deviceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Device(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Device/${resource.id}`
							};
							searchResults.entry.push(entry);
						}
						searchResults.total = searchResults.entry.length;
					}
				}

				res.status(200).json(searchResults);
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};


};


module.exports.getDeviceById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a resource specific device
		let { Device } = require(resolveFromVersion(version, 'uscore/resources/Device'));

		return service.getDeviceById(req, logger, context)
			.then((device) => {
				if (device) {
					res.status(200).json(new Device(device));
				} else {
					next(errors.notFound('Device not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};