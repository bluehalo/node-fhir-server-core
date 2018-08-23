module.exports = {
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-description',
		description: 'Natural language description of the TestScript.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-identifier',
		description: 'External identifier.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-name',
		description: 'Informal name for this TestScript.',
	},
	TESTSCRIPT_CAPABILITY: {
		name: 'testscript-capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability',
		description: 'TestScript required and validated capability.',
	},
	TESTSCRIPT_SETUP_CAPABILITY: {
		name: 'testscript-setup-capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-setup-capability',
		description: 'TestScript setup required and validated capability.',
	},
	TESTSCRIPT_TEST_CAPABILITY: {
		name: 'testscript-test-capability',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-test-capability',
		description: 'TestScript test required and validated capability.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-url',
		description: 'Absolute URL used to reference this TestScript.',
	},
};
