/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getProcedure = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific procedure & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));

		/**
		* return service.getProcedure(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getProcedure(req, logger, context)
			.then((procedures) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (procedures) {
					for (let resource of procedures) {
						if (!req.procedure || req.procedure === resource.procedureId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Procedure(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Procedure/${resource.id}`
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


module.exports.getProcedureById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific procedure
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));

		return service.getProcedureById(req, logger, context)
			.then((procedure) => {
				if (procedure) {
					res.status(200).json(new Procedure(procedure));
				} else {
					next(errors.notFound('Procedure not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
