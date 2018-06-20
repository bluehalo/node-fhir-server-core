/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ABSTRACT: {
		name: 'abstract',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Whether the structure is abstract',
	},
	BASE: {
		name: 'base',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Definition that this type is constrained/specialized from',
	},
	BASE_PATH: {
		name: 'base-path',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Path that identifies the base element',
	},
	CONTEXT_TYPE: {
		name: 'context-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'resource | datatype | extension',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The structure definition publication date',
	},
	DERIVATION: {
		name: 'derivation',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'specialization | constraint - How relates to base definition',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The description of the structure definition',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'For testing purposes, not real usage',
	},
	EXT_CONTEXT: {
		name: 'ext-context',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Where the extension can be used in instances',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'External identifier for the structure definition',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Intended jurisdiction for the structure definition',
	},
	KEYWORD: {
		name: 'keyword',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'A code for the profile',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'primitive-type | complex-type | resource | logical',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Computationally friendly name of the structure definition',
	},
	PATH: {
		name: 'path',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'A path that is constrained in the profile',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Name of the publisher of the structure definition',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The current status of the structure definition',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The human-friendly name of the structure definition',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'Type defined or constrained by this structure',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The uri that identifies the structure definition',
	},
	VALUESET: {
		name: 'valueset',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'A vocabulary binding reference',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuredefinition',
		documentation: 'The business version of the structure definition',
	},
};
