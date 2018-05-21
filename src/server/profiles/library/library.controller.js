/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getLibrary = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific library & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Library = require(resolveFromVersion(version, 'base/Library'));

		/**
		* return service.getLibrary(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getLibrary(req, logger, context)
			.then((librarys) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (librarys) {
					for (let resource of librarys) {
						if (!req.library || req.library === resource.libraryId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Library(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Library/${resource.id}`
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


module.exports.getLibraryById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific library
		let Library = require(resolveFromVersion(version, 'base/Library'));

		return service.getLibraryById(req, logger, context)
			.then((library) => {
				if (library) {
					res.status(200).json(new Library(library));
				} else {
					next(errors.notFound('Library not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
