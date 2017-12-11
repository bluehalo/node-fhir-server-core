const moment = require('moment-timezone');

/**
 * @name exports
 * @summary Capability statement shell
 */
module.exports.makeStatement = resources => ({
	resourceType: 'CapabilityStatement',
	status: 'active',
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
	fhirVersion: '2.0',
	acceptUnknown: 'extensions',
	format: [
		'application/fhir+xml',
		'application/fhir+json'
	],
	rest: [
		{
			mode: 'server',
			resource: resources
		}
	]
});
