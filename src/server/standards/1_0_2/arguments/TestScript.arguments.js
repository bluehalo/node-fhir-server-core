module.exports = {
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-description',
		description: 'Natural language description of the TestScript.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-identifier',
		description: 'External identifier.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-name',
		description: 'Informal name for this TestScript.',
	},
	TESTSCRIPT_CAPABILITY: {
		name: 'Testscript_capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability',
		description: 'TestScript required and validated capability.',
	},
	TESTSCRIPT_SETUP_CAPABILITY: {
		name: 'Testscript_setup_capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-setup-capability',
		description: 'TestScript setup required and validated capability.',
	},
	TESTSCRIPT_TEST_CAPABILITY: {
		name: 'Testscript_test_capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-test-capability',
		description: 'TestScript test required and validated capability.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-url',
		description: 'Absolute URL used to reference this TestScript.',
	},
};
