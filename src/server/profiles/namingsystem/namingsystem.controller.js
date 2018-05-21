/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getNamingSystem = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific namingsystem & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let NamingSystem = require(resolveFromVersion(version, 'base/NamingSystem'));

		/**
		* return service.getNamingSystem(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getNamingSystem(req, logger, context)
			.then((namingsystems) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (namingsystems) {
					for (let resource of namingsystems) {
						if (!req.namingsystem || req.namingsystem === resource.namingsystemId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new NamingSystem(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/NamingSystem/${resource.id}`
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


module.exports.getNamingSystemById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific namingsystem
		let NamingSystem = require(resolveFromVersion(version, 'base/NamingSystem'));

		return service.getNamingSystemById(req, logger, context)
			.then((namingsystem) => {
				if (namingsystem) {
					res.status(200).json(new NamingSystem(namingsystem));
				} else {
					next(errors.notFound('NamingSystem not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
