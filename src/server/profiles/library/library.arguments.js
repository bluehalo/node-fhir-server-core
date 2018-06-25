/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	COMPOSED_OF: {
		name: 'composed-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'What resource is being referenced',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The library publication date',
	},
	DEPENDS_ON: {
		name: 'depends-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'What resource is being referenced',
	},
	DERIVED_FROM: {
		name: 'derived-from',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'What resource is being referenced',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The description of the library',
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The time during which the library is intended to be in use',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'External identifier for the library',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'Intended jurisdiction for the library',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'Computationally friendly name of the library',
	},
	PREDECESSOR: {
		name: 'predecessor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'What resource is being referenced',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'Name of the publisher of the library',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The current status of the library',
	},
	SUCCESSOR: {
		name: 'successor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'What resource is being referenced',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The human-friendly name of the library',
	},
	TOPIC: {
		name: 'topic',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'Topics associated with the module',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The uri that identifies the library',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#library',
		documentation: 'The business version of the library',
	},
};
