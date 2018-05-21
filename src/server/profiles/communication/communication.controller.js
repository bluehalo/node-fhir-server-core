/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getCommunication = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific communication & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Communication = require(resolveFromVersion(version, 'base/Communication'));

		/**
		* return service.getCommunication(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getCommunication(req, logger, context)
			.then((communications) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (communications) {
					for (let resource of communications) {
						if (!req.communication || req.communication === resource.communicationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Communication(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Communication/${resource.id}`
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


module.exports.getCommunicationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific communication
		let Communication = require(resolveFromVersion(version, 'base/Communication'));

		return service.getCommunicationById(req, logger, context)
			.then((communication) => {
				if (communication) {
					res.status(200).json(new Communication(communication));
				} else {
					next(errors.notFound('Communication not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
