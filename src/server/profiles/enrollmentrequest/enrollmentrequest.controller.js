/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getEnrollmentRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific enrollmentrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let EnrollmentRequest = require(resolveFromVersion(version, 'base/EnrollmentRequest'));

		/**
		* return service.getEnrollmentRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getEnrollmentRequest(req, logger, context)
			.then((enrollmentrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (enrollmentrequests) {
					for (let resource of enrollmentrequests) {
						if (!req.enrollmentrequest || req.enrollmentrequest === resource.enrollmentrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new EnrollmentRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/EnrollmentRequest/${resource.id}`
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


module.exports.getEnrollmentRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific enrollmentrequest
		let EnrollmentRequest = require(resolveFromVersion(version, 'base/EnrollmentRequest'));

		return service.getEnrollmentRequestById(req, logger, context)
			.then((enrollmentrequest) => {
				if (enrollmentrequest) {
					res.status(200).json(new EnrollmentRequest(enrollmentrequest));
				} else {
					next(errors.notFound('EnrollmentRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
