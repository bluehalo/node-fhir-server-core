module.exports = {
	BASE: {
		name: 'base',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-base',
		description: 'The resource type this search parameter applies to.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-code',
		description: 'Code used in URL.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-description',
		description: 'Documentation for  search parameter.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-name',
		description: 'Informal name for this search parameter.',
	},
	TARGET: {
		name: 'target',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-target',
		description: 'Types of resource (if a resource reference).',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-type',
		description: 'number | date | string | token | reference | composite | quantity | uri.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/SearchParameter-url',
		description: 'Absolute URL used to reference this search parameter.',
	},
};
