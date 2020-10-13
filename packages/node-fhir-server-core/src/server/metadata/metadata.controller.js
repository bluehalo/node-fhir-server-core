const { VERSIONS } = require('../../constants');
const service = require('./metadata.service.js');

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = ({ profiles, security, statementGenerator }) => {
  return (req, res, next) => {
    // Use our service to generate the capability statement
    const { base_version: fhirVersion } = req.sanitized_args;

    return service
      .generateCapabilityStatement({
        fhirVersion: fhirVersion || VERSIONS['4_0_0'],
        profiles,
        security,
        statementGenerator,
      })
      .then((statement) => res.status(200).json(statement))
      .catch((err) => next(err));
  };
};
