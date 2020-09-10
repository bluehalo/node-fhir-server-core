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
		description: 'The resource type this search parameter applies to',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SearchParameter.code',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-code',
		description: 'Code used in URL',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'SearchParameter.description',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-description',
		description: 'Documentation for  search parameter',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'SearchParameter.name',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-name',
		description: 'Informal name for this search parameter',
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
		description: 'Absolute URL used to reference this search parameter',
	},
};
