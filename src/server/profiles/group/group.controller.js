/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getGroup = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific group & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Group = require(resolveFromVersion(version, 'base/Group'));

		/**
		* return service.getGroup(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getGroup(req, logger, context)
			.then((groups) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (groups) {
					for (let resource of groups) {
						if (!req.group || req.group === resource.groupId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Group(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Group/${resource.id}`
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


module.exports.getGroupById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific group
		let Group = require(resolveFromVersion(version, 'base/Group'));

		return service.getGroupById(req, logger, context)
			.then((group) => {
				if (group) {
					res.status(200).json(new Group(group));
				} else {
					next(errors.notFound('Group not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
