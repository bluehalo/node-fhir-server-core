/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-description',
		description: 'Natural language description of the TestScript',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestScript.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-identifier',
		description: 'External identifier',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.name',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-name',
		description: 'Informal name for this TestScript',
	},
	'testscript-capability': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.metadata.capability.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability',
		description: 'TestScript required and validated capability',
	},
	'testscript-setup-capability': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.setup.metadata.capability.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-setup-capability',
		description: 'TestScript setup required and validated capability',
	},
	'testscript-test-capability': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestScript.test.metadata.capability.description',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-testscript-test-capability',
		description: 'TestScript test required and validated capability',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'TestScript.url',
		definition: 'http://hl7.org/fhir/SearchParameter/TestScript-url',
		description: 'Absolute URL used to reference this TestScript',
	},
};
