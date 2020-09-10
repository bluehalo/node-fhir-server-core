/**
 * @name exports
 * @static
 * @summary Arguments for the valueset query
 */
module.exports = {
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
		description: 'The description of the value set',
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
		description: 'External identifier for the value set',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction',
		description: 'Intended jurisdiction for the value set',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ValueSet.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-name',
		description: 'Computationally friendly name of the value set',
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
		description: 'The current status of the value set',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ValueSet.title',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-title',
		description: 'The human-friendly name of the value set',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ValueSet.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-url',
		description: 'The uri that identifies the value set',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ValueSet.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-version',
		description: 'The business version of the value set',
	},
};
