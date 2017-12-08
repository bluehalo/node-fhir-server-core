module.exports.getPatient = (adapter, logger) => {
	// let { service } = adapter;
	// validate arguments
	/**
	* return service.getPatient(req, logger)
	*		.then(sanitizeResponse) // Only show the user what they are allowed to see
	*		.then(validateResponse); // Make sure the response data conforms to the spec
	*/

	return (req, res) => {
		res.send('Here is your patient args' + JSON.stringify(req.query));
	};
};


module.exports.getPatientById = (adapter, logger) => {
	// let { service } = adapter;
	// validate arguments
	/**
	* return service.getPatientById(req, logger)
	*		.then(sanitizeResponse) // Only show the user what they are allowed to see
	*		.then(validateResponse); // Make sure the response data conforms to the spec
	*/

	return (req, res) => {
		res.send('Here is your patient' + JSON.stringify(req.params));
	};
};
