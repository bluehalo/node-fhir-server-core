const deprecate = require('../utils/deprecation.notice.js');
const service = require('./metadata.service.js');
const loggers = require('../winston.js');

// TODO: REMOVE: logger in future versions, emit notices for now
let logger = deprecate(
	loggers.get(),
	'Using the logger this way is deprecated. Please see the documentation on ' +
	'BREAKING CHANGES in version 2.0.0 for instructions on how to upgrade.'
);

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = ({ config }) => {
	return (req, res, next) => {
		// Use our service to generate the capability statement
		return service
			.generateCapabilityStatement(req.sanitized_args, config, logger)
			.then(statement => res.status(200).json(statement))
			.catch(err => next(err));
	};
};
