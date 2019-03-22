/**
 * @name exports
 * @static
 * @summary Arguments for the searchparameter query
 */
module.exports = {
	base: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.base',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-base',
		description: 'The resource type(s) this search parameter applies to',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.code',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-code',
		description: 'Code used in URL',
	},
	component: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SearchParameter.component.definition',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-component',
		description: 'Defines how the part works',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'SearchParameter.date',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-date',
		description: 'The search parameter publication date',
	},
	'derived-from': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'SearchParameter.derivedFrom',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from',
		description: 'Original Definition for the search parameter',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'SearchParameter.description',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-description',
		description: 'The description of the search parameter',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-jurisdiction',
		description: 'Intended jurisdiction for the search parameter',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'SearchParameter.name',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-name',
		description: 'Computationally friendly name of the search parameter',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'SearchParameter.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-publisher',
		description: 'Name of the publisher of the search parameter',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.status',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-status',
		description: 'The current status of the search parameter',
	},
	target: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.target',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-target',
		description: 'Types of resource (if a resource reference)',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.type',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-type',
		description: 'number | date | string | token | reference | composite | quantity | uri',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'SearchParameter.url',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-url',
		description: 'The uri that identifies the search parameter',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.version',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-version',
		description: 'The business version of the search parameter',
	},
};
