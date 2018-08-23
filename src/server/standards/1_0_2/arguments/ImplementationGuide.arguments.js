module.exports = {
	CONTEXT: {
		name: 'context',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-context',
		description: 'A use context assigned to the structure.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-date',
		description: 'The implementation guide publication date.',
	},
	DEPENDENCY: {
		name: 'dependency',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency',
		description: 'Where to find dependency.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-description',
		description: 'Text search in the description of the implementation guide.',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		description: 'If for testing purposes, not real usage.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		description: 'Name of the implementation guide.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		description: 'Name of the publisher of the implementation guide.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-status',
		description: 'The current status of the implementation guide.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-url',
		description: 'Absolute URL used to reference this Implementation Guide.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		description: 'The version identifier of the implementation guide.',
	},
};
