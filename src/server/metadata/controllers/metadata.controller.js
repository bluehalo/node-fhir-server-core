const path = require('path');
const service = require(path.resolve('./src/server/metadata/services/metadata.service'));
const { ServerError } = require(path.resolve('./src/server/utils/error.utils'));

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = (profiles, logger) => {
  return (_, res, next) => {
		return service.generateCapabilityStatement(profiles, logger)
			.then((statement) => res.status(200).json(statement))
			.catch((err) => next(new ServerError(500, err.message)));
	};
};
