/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getMessageHeader = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific messageheader & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));

		/**
		* return service.getMessageHeader(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getMessageHeader(req, logger, context)
			.then((messageheaders) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (messageheaders) {
					for (let resource of messageheaders) {
						if (!req.messageheader || req.messageheader === resource.messageheaderId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new MessageHeader(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/MessageHeader/${resource.id}`
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


module.exports.getMessageHeaderById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific messageheader
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));

		return service.getMessageHeaderById(req, logger, context)
			.then((messageheader) => {
				if (messageheader) {
					res.status(200).json(new MessageHeader(messageheader));
				} else {
					next(errors.notFound('MessageHeader not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
