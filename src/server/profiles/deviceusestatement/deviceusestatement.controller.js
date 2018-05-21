/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDeviceUseStatement = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific deviceusestatement & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DeviceUseStatement = require(resolveFromVersion(version, 'base/DeviceUseStatement'));

		/**
		* return service.getDeviceUseStatement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDeviceUseStatement(req, logger, context)
			.then((deviceusestatements) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (deviceusestatements) {
					for (let resource of deviceusestatements) {
						if (!req.deviceusestatement || req.deviceusestatement === resource.deviceusestatementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DeviceUseStatement(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DeviceUseStatement/${resource.id}`
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


module.exports.getDeviceUseStatementById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific deviceusestatement
		let DeviceUseStatement = require(resolveFromVersion(version, 'base/DeviceUseStatement'));

		return service.getDeviceUseStatementById(req, logger, context)
			.then((deviceusestatement) => {
				if (deviceusestatement) {
					res.status(200).json(new DeviceUseStatement(deviceusestatement));
				} else {
					next(errors.notFound('DeviceUseStatement not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
