/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The concept map publication date',
	},
	DEPENDSON: {
		name: 'dependson',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Reference to property mapping depends on',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The description of the concept map',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'External identifier for the concept map',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Intended jurisdiction for the concept map',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Computationally friendly name of the concept map',
	},
	OTHER: {
		name: 'other',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Canonical URL for other concept map',
	},
	PRODUCT: {
		name: 'product',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Reference to property mapping depends on',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Name of the publisher of the concept map',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Identifies the source of the concepts which are being mapped',
	},
	SOURCE_CODE: {
		name: 'source-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Identifies element being mapped',
	},
	SOURCE_SYSTEM: {
		name: 'source-system',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Code System (if value set crosses code systems)',
	},
	SOURCE_URI: {
		name: 'source-uri',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Identifies the source of the concepts which are being mapped',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The current status of the concept map',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Provides context to the mappings',
	},
	TARGET_CODE: {
		name: 'target-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Code that identifies the target element',
	},
	TARGET_SYSTEM: {
		name: 'target-system',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'System of the target (if necessary)',
	},
	TARGET_URI: {
		name: 'target-uri',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'Provides context to the mappings',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The human-friendly name of the concept map',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The uri that identifies the concept map',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#conceptmap',
		documentation: 'The business version of the concept map',
	},
};
