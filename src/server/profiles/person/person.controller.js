/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPerson = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific person & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Person = require(resolveFromVersion(version, 'base/Person'));

		/**
		* return service.getPerson(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPerson(req, logger, context)
			.then((persons) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (persons) {
					for (let resource of persons) {
						if (!req.person || req.person === resource.personId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Person(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Person/${resource.id}`
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


module.exports.getPersonById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific person
		let Person = require(resolveFromVersion(version, 'base/Person'));

		return service.getPersonById(req, logger, context)
			.then((person) => {
				if (person) {
					res.status(200).json(new Person(person));
				} else {
					next(errors.notFound('Person not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
