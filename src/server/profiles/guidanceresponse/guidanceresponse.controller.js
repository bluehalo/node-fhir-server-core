/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getGuidanceResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific guidanceresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let GuidanceResponse = require(resolveFromVersion(version, 'base/GuidanceResponse'));

		/**
		* return service.getGuidanceResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getGuidanceResponse(req, logger, context)
			.then((guidanceresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (guidanceresponses) {
					for (let resource of guidanceresponses) {
						if (!req.guidanceresponse || req.guidanceresponse === resource.guidanceresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new GuidanceResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/GuidanceResponse/${resource.id}`
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


module.exports.getGuidanceResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific guidanceresponse
		let GuidanceResponse = require(resolveFromVersion(version, 'base/GuidanceResponse'));

		return service.getGuidanceResponseById(req, logger, context)
			.then((guidanceresponse) => {
				if (guidanceresponse) {
					res.status(200).json(new GuidanceResponse(guidanceresponse));
				} else {
					next(errors.notFound('GuidanceResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
