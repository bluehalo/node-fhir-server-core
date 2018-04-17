const DiagnosticReport = require('../../standards/uscore/resources/DiagnosticReport');
const errors = require('../../utils/error.utils');

module.exports.getDiagnosticReport = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getDiagnosticReport(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDiagnosticReport(req, logger, context)
			.then((diagnosticreports) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (diagnosticreports) {
					for (let resource of diagnosticreports) {
						if (!req.diagnosticreport || req.diagnosticreport === resource.diagnosticreportId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new DiagnosticReport(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/DiagnosticReport/${resource.id}`
							};
							searchResults.entry.push(entry);
						}
						searchResults.total = searchResults.entry.length;
					}
				}

				res.status(200).json(searchResults);
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};


};


module.exports.getDiagnosticReportById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.diagnosticreport, then we need to validate that this diagnosticreport
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.diagnosticreport
			&& req.body
			&& req.body.id
			&& req.diagnosticreport !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access diagnosticreport ${req.body.id}.`));
		}

		return service.getDiagnosticReportById(req, logger, context)
			.then((diagnosticreport) => {
				if (diagnosticreport) {
					res.status(200).json(new DiagnosticReport(diagnosticreport));
				} else {
					next(errors.notFound('DiagnosticReport not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getDiagnosticReportByFriend = ({ profile, logger }) => {
// 	let { serviceModule: service } = profile;
//
// 	return (req, res, next) => {
//
// 		// Create a context I can pass some data through
// 		let context = {
// 			version: req.params.version
// 		};
//
//
// 		return service.getDiagnosticReportByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
