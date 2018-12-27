module.exports = {
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
		documentation: 'The description of the implementation guide.',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		documentation: 'For testing purposes, not real usage.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction',
		documentation: 'Intended jurisdiction for the implementation guide.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		documentation: 'Computationally friendly name of the implementation guide.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		documentation: 'Name of the publisher of the implementation guide.',
	},
	RESOURCE: {
		name: 'resource',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource',
		documentation: 'Location of the resource.',
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
		documentation: 'The uri that identifies the implementation guide.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		documentation: 'The business version of the implementation guide.',
	},
};
