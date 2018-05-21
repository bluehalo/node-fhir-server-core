/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEnrollmentResponse = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific enrollmentresponse & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let EnrollmentResponse = require(resolveFromVersion(version, 'base/EnrollmentResponse'));

		/**
		* return service.getEnrollmentResponse(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEnrollmentResponse(req, logger, context)
			.then((enrollmentresponses) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (enrollmentresponses) {
					for (let resource of enrollmentresponses) {
						if (!req.enrollmentresponse || req.enrollmentresponse === resource.enrollmentresponseId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new EnrollmentResponse(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/EnrollmentResponse/${resource.id}`
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


module.exports.getEnrollmentResponseById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific enrollmentresponse
		let EnrollmentResponse = require(resolveFromVersion(version, 'base/EnrollmentResponse'));

		return service.getEnrollmentResponseById(req, logger, context)
			.then((enrollmentresponse) => {
				if (enrollmentresponse) {
					res.status(200).json(new EnrollmentResponse(enrollmentresponse));
				} else {
					next(errors.notFound('EnrollmentResponse not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
