module.exports = {
	BASE: {
		name: 'base',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-base',
		documentation: 'The resource type this search parameter applies to.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-code',
		documentation: 'Code used in URL.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-description',
		documentation: 'Documentation for  search parameter.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-name',
		documentation: 'Informal name for this search parameter.',
	},
	TARGET: {
		name: 'target',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-target',
		documentation: 'Types of resource (if a resource reference).',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-type',
		documentation: 'number | date | string | token | reference | composite | quantity | uri.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-url',
		documentation: 'Absolute URL used to reference this search parameter.',
	},
};
