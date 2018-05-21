/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getPaymentReconciliation = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific paymentreconciliation & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let PaymentReconciliation = require(resolveFromVersion(version, 'base/PaymentReconciliation'));

		/**
		* return service.getPaymentReconciliation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getPaymentReconciliation(req, logger, context)
			.then((paymentreconciliations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (paymentreconciliations) {
					for (let resource of paymentreconciliations) {
						if (!req.paymentreconciliation || req.paymentreconciliation === resource.paymentreconciliationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new PaymentReconciliation(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/PaymentReconciliation/${resource.id}`
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


module.exports.getPaymentReconciliationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific paymentreconciliation
		let PaymentReconciliation = require(resolveFromVersion(version, 'base/PaymentReconciliation'));

		return service.getPaymentReconciliationById(req, logger, context)
			.then((paymentreconciliation) => {
				if (paymentreconciliation) {
					res.status(200).json(new PaymentReconciliation(paymentreconciliation));
				} else {
					next(errors.notFound('PaymentReconciliation not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
