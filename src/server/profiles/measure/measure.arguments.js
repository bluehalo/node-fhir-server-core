/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	COMPOSED_OF: {
		name: 'composed-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'What resource is being referenced',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The measure publication date',
	},
	DEPENDS_ON: {
		name: 'depends-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'What resource is being referenced',
	},
	DERIVED_FROM: {
		name: 'derived-from',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'What resource is being referenced',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The description of the measure',
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The time during which the measure is intended to be in use',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'External identifier for the measure',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'Intended jurisdiction for the measure',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'Computationally friendly name of the measure',
	},
	PREDECESSOR: {
		name: 'predecessor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'What resource is being referenced',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'Name of the publisher of the measure',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The current status of the measure',
	},
	SUCCESSOR: {
		name: 'successor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'What resource is being referenced',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The human-friendly name of the measure',
	},
	TOPIC: {
		name: 'topic',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'Topics associated with the module',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The uri that identifies the measure',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#measure',
		documentation: 'The business version of the measure',
	},
};
