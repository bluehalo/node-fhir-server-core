const MedicationRequest = require('../../resources/uscore/resources/MedicationRequest');
const errors = require('../../utils/error.utils');

module.exports.getMedicationRequest = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getMedicationRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMedicationRequest(req, logger, context)
			.then((medicationrequests) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (medicationrequests) {
					for (let resource of medicationrequests) {
						if (!req.medicationrequest || req.medicationrequest === resource.medicationrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new MedicationRequest(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/MedicationRequest/${resource.id}`
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


module.exports.getMedicationRequestById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.medicationrequest, then we need to validate that this medicationrequest
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.medicationrequest
			&& req.body
			&& req.body.id
			&& req.medicationrequest !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access medicationrequest ${req.body.id}.`));
		}

		return service.getMedicationRequestById(req, logger, context)
			.then((medicationrequest) => {
				if (medicationrequest) {
					res.status(200).json(new MedicationRequest(medicationrequest));
				} else {
					next(errors.notFound('MedicationRequest not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getMedicationRequestByFriend = ({ profile, logger }) => {
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
// 		return service.getMedicationRequestByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
