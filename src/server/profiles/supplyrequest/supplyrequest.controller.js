/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSupplyRequest = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific supplyrequest & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let SupplyRequest = require(resolveFromVersion(version, 'base/SupplyRequest'));

		/**
		* return service.getSupplyRequest(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSupplyRequest(req, logger, context)
			.then((supplyrequests) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (supplyrequests) {
					for (let resource of supplyrequests) {
						if (!req.supplyrequest || req.supplyrequest === resource.supplyrequestId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new SupplyRequest(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/SupplyRequest/${resource.id}`
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


module.exports.getSupplyRequestById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific supplyrequest
		let SupplyRequest = require(resolveFromVersion(version, 'base/SupplyRequest'));

		return service.getSupplyRequestById(req, logger, context)
			.then((supplyrequest) => {
				if (supplyrequest) {
					res.status(200).json(new SupplyRequest(supplyrequest));
				} else {
					next(errors.notFound('SupplyRequest not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
