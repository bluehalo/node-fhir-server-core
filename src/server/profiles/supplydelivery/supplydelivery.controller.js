/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSupplyDelivery = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific supplydelivery & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));

		/**
		* return service.getSupplyDelivery(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSupplyDelivery(req, logger, context)
			.then((supplydeliverys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (supplydeliverys) {
					for (let resource of supplydeliverys) {
						if (!req.supplydelivery || req.supplydelivery === resource.supplydeliveryId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new SupplyDelivery(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/SupplyDelivery/${resource.id}`
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


module.exports.getSupplyDeliveryById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific supplydelivery
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));

		return service.getSupplyDeliveryById(req, logger, context)
			.then((supplydelivery) => {
				if (supplydelivery) {
					res.status(200).json(new SupplyDelivery(supplydelivery));
				} else {
					next(errors.notFound('SupplyDelivery not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
