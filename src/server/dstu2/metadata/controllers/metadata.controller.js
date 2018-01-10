const { ServerError } = require('../../../utils/error.utils');
const service = require('../services/metadata.service');

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = (profiles, logger, security) => {

  return (req, res, next) => {
		return service.generateCapabilityStatement(req, profiles, logger, security)
			.then((statement) => res.status(200).json(statement))
			.catch((err) => next(new ServerError(500, err.message)));
	};
};
