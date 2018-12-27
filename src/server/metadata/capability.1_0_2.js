const moment = require('moment-timezone');
const { resolveFromVersion } = require('../utils/resolve.utils');

/**
 * @description Construct a resource with base_version/uscore path
 */
let getConformanceResource = () => {
	return require(resolveFromVersion('1_0_2', 'Conformance'));
};

module.exports.makeStatement = function(resources) {
	let Conformance = getConformanceResource();

	return new Conformance({
		status: 'active',
		date: moment()
			.tz('America/New_York')
			.format(),
		publisher: 'Not provided',
		kind: 'instance',
		software: {
			name: 'FHIR Server',
			version: '0.0.1',
		},
		implementation: {
			description: 'FHIR Test Server (DSTU2)',
		},
		fhirVersion: '1.0.2',
		acceptUnknown: 'extensions',
		format: ['application/json+fhir'],
		rest: [resources],
	});
};

/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.securityStatement = securityUrls => ({
	cors: true,
	service: [
		{
			coding: [
				{
					system: 'http://hl7.org/fhir/restful-security-service',
					code: 'SMART-on-FHIR',
				},
			],
			text: 'OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)',
		},
	],
	extension: [
		{
			url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
			extension: securityUrls,
		},
	],
});
