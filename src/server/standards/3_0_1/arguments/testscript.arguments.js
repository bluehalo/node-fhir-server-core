/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'TestScript.date',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-date',
		description: 'The test script publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-description',
		description: 'The description of the test script',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestScript.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-identifier',
		description: 'External identifier for the test script',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestScript.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction',
		description: 'Intended jurisdiction for the test script',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.name',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-name',
		description: 'Computationally friendly name of the test script',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-publisher',
		description: 'Name of the publisher of the test script',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestScript.status',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-status',
		description: 'The current status of the test script',
	},
	'testscript-capability': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.metadata.capability.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability',
		description: 'TestScript required and validated capability',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.title',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-title',
		description: 'The human-friendly name of the test script',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'TestScript.url',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-url',
		description: 'The uri that identifies the test script',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestScript.version',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-version',
		description: 'The business version of the test script',
	},
};
