const errors = require('../../utils/error.utils');
const service = require('./metadata.service');

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = ({ config, logger }) => {
  return (req, res, next) => {
		// Use our service to generate the capability statement
		return service.generateCapabilityStatement(req, config, logger)
			.then((statement) => res.status(200).json(statement))
			.catch((err) => next(errors.internal(err.message)));
	};
};
