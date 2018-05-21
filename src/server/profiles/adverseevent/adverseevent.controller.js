/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAdverseEvent = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific adverseevent & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));

		/**
		* return service.getAdverseEvent(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAdverseEvent(req, logger, context)
			.then((adverseevents) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (adverseevents) {
					for (let resource of adverseevents) {
						if (!req.adverseevent || req.adverseevent === resource.adverseeventId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new AdverseEvent(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/AdverseEvent/${resource.id}`
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


module.exports.getAdverseEventById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific adverseevent
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));

		return service.getAdverseEventById(req, logger, context)
			.then((adverseevent) => {
				if (adverseevent) {
					res.status(200).json(new AdverseEvent(adverseevent));
				} else {
					next(errors.notFound('AdverseEvent not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
