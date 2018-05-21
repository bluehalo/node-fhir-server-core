/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	COMPOSED_OF: {
		name: 'composed-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'What resource is being referenced',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The plan definition publication date',
	},
	DEPENDS_ON: {
		name: 'depends-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'What resource is being referenced',
	},
	DERIVED_FROM: {
		name: 'derived-from',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'What resource is being referenced',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The description of the plan definition',
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The time during which the plan definition is intended to be in use',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'External identifier for the plan definition',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'Intended jurisdiction for the plan definition',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'Computationally friendly name of the plan definition',
	},
	PREDECESSOR: {
		name: 'predecessor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'What resource is being referenced',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'Name of the publisher of the plan definition',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The current status of the plan definition',
	},
	SUCCESSOR: {
		name: 'successor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'What resource is being referenced',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The human-friendly name of the plan definition',
	},
	TOPIC: {
		name: 'topic',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'Topics associated with the module',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The uri that identifies the plan definition',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#plandefinition',
		documentation: 'The business version of the plan definition',
	},
};
