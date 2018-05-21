/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getSlot = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific slot & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Slot = require(resolveFromVersion(version, 'base/Slot'));

		/**
		* return service.getSlot(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getSlot(req, logger, context)
			.then((slots) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (slots) {
					for (let resource of slots) {
						if (!req.slot || req.slot === resource.slotId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Slot(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Slot/${resource.id}`
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


module.exports.getSlotById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific slot
		let Slot = require(resolveFromVersion(version, 'base/Slot'));

		return service.getSlotById(req, logger, context)
			.then((slot) => {
				if (slot) {
					res.status(200).json(new Slot(slot));
				} else {
					next(errors.notFound('Slot not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
