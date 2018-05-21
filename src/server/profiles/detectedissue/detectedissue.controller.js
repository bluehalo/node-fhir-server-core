/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDetectedIssue = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific detectedissue & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DetectedIssue = require(resolveFromVersion(version, 'base/DetectedIssue'));

		/**
		* return service.getDetectedIssue(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDetectedIssue(req, logger, context)
			.then((detectedissues) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (detectedissues) {
					for (let resource of detectedissues) {
						if (!req.detectedissue || req.detectedissue === resource.detectedissueId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DetectedIssue(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DetectedIssue/${resource.id}`
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


module.exports.getDetectedIssueById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific detectedissue
		let DetectedIssue = require(resolveFromVersion(version, 'base/DetectedIssue'));

		return service.getDetectedIssueById(req, logger, context)
			.then((detectedissue) => {
				if (detectedissue) {
					res.status(200).json(new DetectedIssue(detectedissue));
				} else {
					next(errors.notFound('DetectedIssue not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
