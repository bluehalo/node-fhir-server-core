/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getContract = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific contract & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Contract = require(resolveFromVersion(version, 'base/Contract'));

		/**
		* return service.getContract(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getContract(req, logger, context)
			.then((contracts) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (contracts) {
					for (let resource of contracts) {
						if (!req.contract || req.contract === resource.contractId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Contract(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Contract/${resource.id}`
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


module.exports.getContractById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific contract
		let Contract = require(resolveFromVersion(version, 'base/Contract'));

		return service.getContractById(req, logger, context)
			.then((contract) => {
				if (contract) {
					res.status(200).json(new Contract(contract));
				} else {
					next(errors.notFound('Contract not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
