/**
 * @name exports
 * @static
 * @summary Arguments for the valueset query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.codeSystem.concept.code',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-code',
		description: 'A code defined in the value set',
	},
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.useContext',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-context',
		description: 'A use context assigned to the value set',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ValueSet.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-date',
		description: 'The value set publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ValueSet.description',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-description',
		description: 'Text search in the description of the value set',
	},
	expansion: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ValueSet.expansion.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-expansion',
		description: 'Uniquely identifies this expansion',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-identifier',
		description: 'The identifier for the value set',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ValueSet.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-name',
		description: 'The name of the value set',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ValueSet.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-publisher',
		description: 'Name of the publisher of the value set',
	},
	reference: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ValueSet.compose.include.system',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-reference',
		description: 'A code system included or excluded in the value set or an imported value set',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-status',
		description: 'The status of the value set',
	},
	system: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ValueSet.codeSystem.system',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-system',
		description: 'The system for any codes defined by this value set',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ValueSet.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-url',
		description: 'The logical URL for the value set',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-version',
		description: 'The version identifier of the value set',
	},
};
