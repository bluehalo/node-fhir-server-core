const moment = require('moment-timezone');
const { STU3 } = require('../../../constants');

/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.makeStatement = resources => ({
	resourceType: STU3.RESOURCE_TYPES.CONFORMANCE,
	status: STU3.STATUSES.DRAFT,
	date: moment().tz('America/New_York').format(),
	publisher: 'Not provided',
	kind: 'instance',
	software: {
		name: 'FHIR Server',
		version: '0.0.1'
	},
	implementation: {
		description: 'FHIR Test Server (STU#)'
	},
	fhirVersion: '3.0.1',
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
	cors: true,
	service: [{
		coding: [{
				system: 'http://hl7.org/fhir/restful-security-service',
				code: 'SMART-on-FHIR'
		}],
		text: 'OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)'
	}],
	extension: [{
		url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
		extension: securityUrls
	}]
});
