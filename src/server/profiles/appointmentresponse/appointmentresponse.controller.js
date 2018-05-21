/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAppointmentResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific appointmentresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let AppointmentResponse = require(resolveFromVersion(version, 'base/AppointmentResponse'));

		/**
		 * return service.getAppointmentResponse(req, logger)
		 *		.then(sanitizeResponse) // Only show the user what they are allowed to see
		 *		.then(validateResponse); // Make sure the response data conforms to the spec
		 */
		return service.getAppointmentResponse(req, logger, context)
			.then((appointmentresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (appointmentresponses) {
					for (let resource of appointmentresponses) {
						if (!req.appointmentresponse || req.appointmentresponse === resource.appointmentresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new AppointmentResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/AppointmentResponse/${resource.id}`
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


module.exports.getAppointmentResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific appointmentresponse
		let AppointmentResponse = require(resolveFromVersion(version, 'base/AppointmentResponse'));

		return service.getAppointmentResponseById(req, logger, context)
			.then((appointmentresponse) => {
				if (appointmentresponse) {
					res.status(200).json(new AppointmentResponse(appointmentresponse));
				} else {
					next(errors.notFound('AppointmentResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
