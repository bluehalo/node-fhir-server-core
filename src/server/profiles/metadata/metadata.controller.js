const dstu2Service = require('./metadata.dstu2.service');
const stu3Service = require('./metadata.stu3.service');
const { VERSIONS } = require('../../../constants');
const errors = require('../../utils/error.utils');

function getServiceForVersion (spec_version) {
	switch (spec_version) {
		case VERSIONS.DSTU2: return dstu2Service;
		case VERSIONS.STU3: return stu3Service;
	}
}

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = ({ config, logger }) => {
  return (req, res, next) => {
		// Get the correct service for generating the capability statement
		let spec_version = req.params.version;
		let service = getServiceForVersion(spec_version);

		// If this is undefined, return a 404
		if (!service) {
			let error = errors.notFound();
			logger.error(error.statusCode, error.message);
			return res.status(error.statusCode).json(error);
		}
		// Use our service to generate the capability statement
		return service.generateCapabilityStatement(req, config, logger)
			.then((statement) => res.status(200).json(statement))
			.catch((err) => next(errors.internal(err.message)));
	};
};
