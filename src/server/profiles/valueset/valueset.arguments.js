/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The value set publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The description of the value set',
	},
	EXPANSION: {
		name: 'expansion',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'Uniquely identifies this expansion',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'External identifier for the value set',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'Intended jurisdiction for the value set',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'Computationally friendly name of the value set',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'Name of the publisher of the value set',
	},
	REFERENCE: {
		name: 'reference',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'A code system included or excluded in the value set or an imported value set',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The current status of the value set',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The human-friendly name of the value set',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The uri that identifies the value set',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#valueset',
		documentation: 'The business version of the value set',
	},
};
