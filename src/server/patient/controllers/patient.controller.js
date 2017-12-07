module.exports.getPatient = (adapter, logger) => {
	let { service } = adapter;
	// Attach the logger to the service and resolver so they can be used
	service.logger = logger;

	// validate arguments
	// return service.getPatient();

	return (req, res) => {
		res.send('Here is your patient args' + JSON.stringify(req.query));
	};
};


module.exports.getPatientById = (adapter, logger) => {
	let { service } = adapter;
	// Attach the logger to the service and resolver so they can be used
	service.logger = logger;

	// validate arguments
	// return service.getPatientById();

	return (req, res) => {
		res.send('Here is your patient' + JSON.stringify(req.params));
	};
};
