module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-date',
		description: 'The implementation guide publication date.',
	},
	DEPENDENCY: {
		name: 'Dependency',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency',
		description: 'Where to find dependency.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-description',
		description: 'The description of the implementation guide.',
	},
	EXPERIMENTAL: {
		name: 'Experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		description: 'For testing purposes, not real usage.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction',
		description: 'Intended jurisdiction for the implementation guide.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		description: 'Computationally friendly name of the implementation guide.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		description: 'Name of the publisher of the implementation guide.',
	},
	RESOURCE: {
		name: 'Resource',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource',
		description: 'Location of the resource.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-status',
		description: 'The current status of the implementation guide.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-url',
		description: 'The uri that identifies the implementation guide.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		description: 'The business version of the implementation guide.',
	},
};
