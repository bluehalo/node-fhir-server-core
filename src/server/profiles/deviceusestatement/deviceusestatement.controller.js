/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDeviceStatement = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicestatement & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DeviceStatement = require(resolveFromVersion(version, 'base/DeviceStatement'));

		/**
		* return service.getDeviceStatement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDeviceStatement(req, logger, context)
			.then((devicestatements) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (devicestatements) {
					for (let resource of devicestatements) {
						if (!req.devicestatement || req.devicestatement === resource.devicestatementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DeviceStatement(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DeviceStatement/${resource.id}`
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


module.exports.getDeviceStatementById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific devicestatement
		let DeviceStatement = require(resolveFromVersion(version, 'base/DeviceStatement'));

		return service.getDeviceStatementById(req, logger, context)
			.then((devicestatement) => {
				if (devicestatement) {
					res.status(200).json(new DeviceStatement(devicestatement));
				} else {
					next(errors.notFound('DeviceStatement not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
