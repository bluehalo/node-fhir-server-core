const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific allergyintolerance & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		/**
		* return service.getAllergyIntolerance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAllergyIntolerance(req, logger, context)
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


module.exports.getAllergyIntoleranceById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific allergyintolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntoleranceById(req, logger, context)
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
