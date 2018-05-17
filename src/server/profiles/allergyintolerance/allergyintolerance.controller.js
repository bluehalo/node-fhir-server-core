/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific allergyintolerance & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntolerance(req.sanitized_args, logger)
			.then((allergyintolerances) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (allergyintolerances) {
					for (let resource of allergyintolerances) {
						if (!req.allergyintolerance || req.allergyintolerance === resource.allergyintoleranceId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new AllergyIntolerance(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/AllergyIntolerance/${resource.id}`
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


module.exports.getAllergyIntoleranceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific allergyintolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntoleranceById(req.sanitized_args, logger)
			.then((allergyintolerance) => {
				if (allergyintolerance) {
					res.status(200).json(new AllergyIntolerance(allergyintolerance));
				} else {
					next(errors.notFound('AllergyIntolerance not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
