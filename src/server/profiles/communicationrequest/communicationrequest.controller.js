/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCommunicationRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific communicationrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let CommunicationRequest = require(resolveFromVersion(version, 'base/CommunicationRequest'));

		/**
		* return service.getCommunicationRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCommunicationRequest(req, logger, context)
			.then((communicationrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (communicationrequests) {
					for (let resource of communicationrequests) {
						if (!req.communicationrequest || req.communicationrequest === resource.communicationrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new CommunicationRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/CommunicationRequest/${resource.id}`
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


module.exports.getCommunicationRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific communicationrequest
		let CommunicationRequest = require(resolveFromVersion(version, 'base/CommunicationRequest'));

		return service.getCommunicationRequestById(req, logger, context)
			.then((communicationrequest) => {
				if (communicationrequest) {
					res.status(200).json(new CommunicationRequest(communicationrequest));
				} else {
					next(errors.notFound('CommunicationRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
