/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSequence = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific sequence & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Sequence = require(resolveFromVersion(version, 'base/Sequence'));

		/**
		* return service.getSequence(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSequence(req, logger, context)
			.then((sequences) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (sequences) {
					for (let resource of sequences) {
						if (!req.sequence || req.sequence === resource.sequenceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Sequence(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Sequence/${resource.id}`
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


module.exports.getSequenceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific sequence
		let Sequence = require(resolveFromVersion(version, 'base/Sequence'));

		return service.getSequenceById(req, logger, context)
			.then((sequence) => {
				if (sequence) {
					res.status(200).json(new Sequence(sequence));
				} else {
					next(errors.notFound('Sequence not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
