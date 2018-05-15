const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPatient = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific patient & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));

		/**
		* return service.getPatient(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPatient(req, logger, context)
			.then((patients) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (patients) {
					for (let resource of patients) {
						if (!req.patient || req.patient === resource.patientId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Patient(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Patient/${resource.id}`
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


module.exports.getPatientById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific patient
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));

		// If we have req.patient, then we need to validate that this patient
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.patient
			&& req.body
			&& req.body.id
			&& req.patient !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access patient ${req.body.id}.`, version));
		}

		return service.getPatientById(req, logger, context)
			.then((patient) => {
				if (patient) {
						res.status(200).json(new Patient(patient));
				} else {
					next(errors.notFound('Patient not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
