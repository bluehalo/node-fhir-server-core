const { ServerError } = require('../../utils/error.utils');

module.exports.getPatient = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		// @TODO Validate arguments and response
		/**
		* return service.getPatient(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPatient(req, logger)
			.then(() => {
				res.send('Here is your patient args' + JSON.stringify(req.query));
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};


module.exports.getPatientById = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		// @TODO Validate arguments and response
		/**
		* return service.getPatientById(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPatientById(req, logger)
			.then(() => {
				res.send('Here is your patient' + JSON.stringify(req.params));
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
