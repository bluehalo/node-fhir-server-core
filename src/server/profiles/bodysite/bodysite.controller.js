/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getBodySite = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific bodysite & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));

		/**
		* return service.getBodySite(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getBodySite(req, logger, context)
			.then((bodysites) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (bodysites) {
					for (let resource of bodysites) {
						if (!req.bodysite || req.bodysite === resource.bodysiteId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new BodySite(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/BodySite/${resource.id}`
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


module.exports.getBodySiteById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific bodysite
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));

		return service.getBodySiteById(req, logger, context)
			.then((bodysite) => {
				if (bodysite) {
					res.status(200).json(new BodySite(bodysite));
				} else {
					next(errors.notFound('BodySite not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
