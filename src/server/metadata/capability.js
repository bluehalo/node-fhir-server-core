const moment = require('moment-timezone');
const path = require('path');
const { DSTU2 } = require(path.resolve('./src/constants'));

/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.makeStatement = resources => ({
	resourceType: DSTU2.RESOURCE_TYPES.CONFORMANCE,
	status: DSTU2.STATUSES.DRAFT,
	date: moment().tz('America/New_York').format(),
	publisher: 'Not provided',
	kind: 'instance',
	software: {
		name: 'FHIR Server',
		version: '0.0.1'
	},
	implementation: {
		description: 'FHIR Test Server (DSTU2)'
	},
	fhirVersion: '1.0.2',
	acceptUnknown: 'extensions',
	format: [
		'application/fhir+json'
	],
	rest: [
		resources
	]
});


/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.securityStatement = securityUrls => ({
	extension: [{
		url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
		extension: securityUrls,
		service: {
			coding: [{
					system: 'http://hl7.org/fhir/restful-security-service',
					code: 'SMART-on-FHIR'
			}],
			text: 'OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)'
		}
	}]
});

