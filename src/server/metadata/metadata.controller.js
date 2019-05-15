const service = require('./metadata.service.js');

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = ({ config }) => {
	return (req, res, next) => {
		// Use our service to generate the capability statement
		return service
			.generateCapabilityStatement(req.sanitized_args, config)
			.then(statement => res.status(200).json(statement))
			.catch(err => next(err));
	};
};
