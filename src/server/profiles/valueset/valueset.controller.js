/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getValueSet = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific valueset & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ValueSet = require(resolveFromVersion(version, 'base/ValueSet'));

		/**
		* return service.getValueSet(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getValueSet(req, logger, context)
			.then((valuesets) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (valuesets) {
					for (let resource of valuesets) {
						if (!req.valueset || req.valueset === resource.valuesetId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ValueSet(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ValueSet/${resource.id}`
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


module.exports.getValueSetById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific valueset
		let ValueSet = require(resolveFromVersion(version, 'base/ValueSet'));

		return service.getValueSetById(req, logger, context)
			.then((valueset) => {
				if (valueset) {
					res.status(200).json(new ValueSet(valueset));
				} else {
					next(errors.notFound('ValueSet not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
