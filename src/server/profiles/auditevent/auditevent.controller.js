/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAuditEvent = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific auditevent & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let AuditEvent = require(resolveFromVersion(version, 'base/AuditEvent'));

		/**
		* return service.getAuditEvent(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAuditEvent(req, logger, context)
			.then((auditevents) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (auditevents) {
					for (let resource of auditevents) {
						if (!req.auditevent || req.auditevent === resource.auditeventId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new AuditEvent(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/AuditEvent/${resource.id}`
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


module.exports.getAuditEventById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific auditevent
		let AuditEvent = require(resolveFromVersion(version, 'base/AuditEvent'));

		return service.getAuditEventById(req, logger, context)
			.then((auditevent) => {
				if (auditevent) {
					res.status(200).json(new AuditEvent(auditevent));
				} else {
					next(errors.notFound('AuditEvent not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
