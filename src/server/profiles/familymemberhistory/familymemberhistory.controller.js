/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getFamilyMemberHistory = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific familymemberhistory & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));

		/**
		* return service.getFamilyMemberHistory(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getFamilyMemberHistory(req, logger, context)
			.then((familymemberhistorys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (familymemberhistorys) {
					for (let resource of familymemberhistorys) {
						if (!req.familymemberhistory || req.familymemberhistory === resource.familymemberhistoryId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new FamilyMemberHistory(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/FamilyMemberHistory/${resource.id}`
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


module.exports.getFamilyMemberHistoryById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific familymemberhistory
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));

		return service.getFamilyMemberHistoryById(req, logger, context)
			.then((familymemberhistory) => {
				if (familymemberhistory) {
					res.status(200).json(new FamilyMemberHistory(familymemberhistory));
				} else {
					next(errors.notFound('FamilyMemberHistory not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
