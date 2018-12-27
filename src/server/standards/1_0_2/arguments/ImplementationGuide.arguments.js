module.exports = {
	CONTEXT: {
		name: 'context',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-context',
		documentation: 'A use context assigned to the structure.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-date',
		documentation: 'The implementation guide publication date.',
	},
	DEPENDENCY: {
		name: 'dependency',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency',
		documentation: 'Where to find dependency.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-description',
		documentation: 'Text search in the description of the implementation guide.',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		documentation: 'If for testing purposes, not real usage.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		documentation: 'Name of the implementation guide.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		documentation: 'Name of the publisher of the implementation guide.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-status',
		documentation: 'The current status of the implementation guide.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-url',
		documentation: 'Absolute URL used to reference this Implementation Guide.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		documentation: 'The version identifier of the implementation guide.',
	},
};
