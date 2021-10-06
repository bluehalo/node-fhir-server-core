const moment = require('moment-timezone');
const { resolveSchema } = require('../utils/schema.utils');

/**
 * @description Construct a resource with base_version/uscore path
 */
let getCapabilityStatementResource = () => {
  return resolveSchema('4_0_1', 'capabilitystatement');
};

module.exports.makeStatement = function (resources) {
  let CapabilityStatement = getCapabilityStatementResource();

  return new CapabilityStatement({
    status: 'active',
    date: moment().tz('America/New_York').format(),
    publisher: 'Not provided',
    kind: 'instance',
    software: {
      name: 'FHIR Server',
      version: '1.4.0',
    },
    implementation: {
      description: 'FHIR Test Server (R4)',
    },
    fhirVersion: '4.0.1',
    acceptUnknown: 'extensions',
    format: ['application/fhir+json'],
    rest: [resources],
  });
};

/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.securityStatement = (securityUrls) => ({
  cors: true,
  service: [
    {
      coding: [
        {
          system: 'http://hl7.org/fhir/restful-security-service',
          code: 'SMART-on-FHIR',
        },
      ],
      text: 'Custom OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)',
    },
  ],
  extension: [
    {
      url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
      extension: securityUrls,
    },
  ],
});
