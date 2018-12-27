module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-date',
		documentation: 'The test script publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-description',
		documentation: 'The description of the test script.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-identifier',
		documentation: 'External identifier for the test script.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction',
		documentation: 'Intended jurisdiction for the test script.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-name',
		documentation: 'Computationally friendly name of the test script.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-publisher',
		documentation: 'Name of the publisher of the test script.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-status',
		documentation: 'The current status of the test script.',
	},
	TESTSCRIPT_CAPABILITY: {
		name: 'testscript-capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability',
		documentation: 'TestScript required and validated capability.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-title',
		documentation: 'The human-friendly name of the test script.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-url',
		documentation: 'The uri that identifies the test script.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-version',
		documentation: 'The business version of the test script.',
	},
};
