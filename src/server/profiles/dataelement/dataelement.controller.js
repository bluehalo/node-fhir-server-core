/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getDataElement = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific dataelement & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let DataElement = require(resolveFromVersion(version, 'base/DataElement'));

		/**
		* return service.getDataElement(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getDataElement(req, logger, context)
			.then((dataelements) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (dataelements) {
					for (let resource of dataelements) {
						if (!req.dataelement || req.dataelement === resource.dataelementId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new DataElement(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/DataElement/${resource.id}`
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


module.exports.getDataElementById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific dataelement
		let DataElement = require(resolveFromVersion(version, 'base/DataElement'));

		return service.getDataElementById(req, logger, context)
			.then((dataelement) => {
				if (dataelement) {
					res.status(200).json(new DataElement(dataelement));
				} else {
					next(errors.notFound('DataElement not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
