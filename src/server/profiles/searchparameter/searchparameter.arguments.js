/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BASE: {
		name: 'base',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The resource type(s) this search parameter applies to',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Code used in URL',
	},
	COMPONENT: {
		name: 'component',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Defines how the part works',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The search parameter publication date',
	},
	DERIVED_FROM: {
		name: 'derived-from',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Original Definition for the search parameter',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The description of the search parameter',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Intended jurisdiction for the search parameter',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Computationally friendly name of the search parameter',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Name of the publisher of the search parameter',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The current status of the search parameter',
	},
	TARGET: {
		name: 'target',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'Types of resource (if a resource reference)',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'number | date | string | token | reference | composite | quantity | uri',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The uri that identifies the search parameter',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#searchparameter',
		documentation: 'The business version of the search parameter',
	},
};
