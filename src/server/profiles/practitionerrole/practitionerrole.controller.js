/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPractitionerRole = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific practitionerrole & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let PractitionerRole = require(resolveFromVersion(version, 'base/PractitionerRole'));

		/**
		* return service.getPractitionerRole(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPractitionerRole(req, logger, context)
			.then((practitionerroles) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (practitionerroles) {
					for (let resource of practitionerroles) {
						if (!req.practitionerrole || req.practitionerrole === resource.practitionerroleId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new PractitionerRole(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/PractitionerRole/${resource.id}`
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


module.exports.getPractitionerRoleById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific practitionerrole
		let PractitionerRole = require(resolveFromVersion(version, 'base/PractitionerRole'));

		return service.getPractitionerRoleById(req, logger, context)
			.then((practitionerrole) => {
				if (practitionerrole) {
					res.status(200).json(new PractitionerRole(practitionerrole));
				} else {
					next(errors.notFound('PractitionerRole not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
