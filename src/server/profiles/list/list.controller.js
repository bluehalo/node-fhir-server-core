/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getList = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific list & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let List = require(resolveFromVersion(version, 'base/List'));

		/**
		* return service.getList(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getList(req, logger, context)
			.then((lists) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (lists) {
					for (let resource of lists) {
						if (!req.list || req.list === resource.listId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new List(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/List/${resource.id}`
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


module.exports.getListById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific list
		let List = require(resolveFromVersion(version, 'base/List'));

		return service.getListById(req, logger, context)
			.then((list) => {
				if (list) {
					res.status(200).json(new List(list));
				} else {
					next(errors.notFound('List not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
