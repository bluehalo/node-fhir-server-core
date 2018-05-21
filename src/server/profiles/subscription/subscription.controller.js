/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSubscription = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific subscription & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Subscription = require(resolveFromVersion(version, 'base/Subscription'));

		/**
		* return service.getSubscription(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSubscription(req, logger, context)
			.then((subscriptions) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (subscriptions) {
					for (let resource of subscriptions) {
						if (!req.subscription || req.subscription === resource.subscriptionId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Subscription(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Subscription/${resource.id}`
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


module.exports.getSubscriptionById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific subscription
		let Subscription = require(resolveFromVersion(version, 'base/Subscription'));

		return service.getSubscriptionById(req, logger, context)
			.then((subscription) => {
				if (subscription) {
					res.status(200).json(new Subscription(subscription));
				} else {
					next(errors.notFound('Subscription not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
