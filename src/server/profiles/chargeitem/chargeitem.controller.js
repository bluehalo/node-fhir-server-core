/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getChargeItem = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific chargeitem & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let ChargeItem = require(resolveFromVersion(version, 'base/ChargeItem'));

		/**
		* return service.getChargeItem(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getChargeItem(req, logger, context)
			.then((chargeitems) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (chargeitems) {
					for (let resource of chargeitems) {
						if (!req.chargeitem || req.chargeitem === resource.chargeitemId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new ChargeItem(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/ChargeItem/${resource.id}`
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


module.exports.getChargeItemById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific chargeitem
		let ChargeItem = require(resolveFromVersion(version, 'base/ChargeItem'));

		return service.getChargeItemById(req, logger, context)
			.then((chargeitem) => {
				if (chargeitem) {
					res.status(200).json(new ChargeItem(chargeitem));
				} else {
					next(errors.notFound('ChargeItem not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
