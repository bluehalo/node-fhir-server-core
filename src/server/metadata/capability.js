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
		{
			mode: 'server',
			resource: resources
		}
	]
});
