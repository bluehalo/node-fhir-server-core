module.exports.getPatient = (adapter, logger) => {
	let { service, resolver } = adapter;
	// Attach the logger to the service and resolver so they can be used
	resolver.logger = logger;
	service.logger = logger;

	return (req, res) => {
		res.send('Here is your patient args' + JSON.stringify(req.query));
	};
};


module.exports.getPatientById = (adapter, logger) => {
	let { service, resolver } = adapter;
	// Attach the logger to the service and resolver so they can be used
	resolver.logger = logger;
	service.logger = logger;

	return (req, res) => {
		res.send('Here is your patient' + JSON.stringify(req.params));
	};
};
