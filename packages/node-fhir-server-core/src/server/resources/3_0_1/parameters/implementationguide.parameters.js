/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImplementationGuide.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-date',
		description: 'The implementation guide publication date',
	},
	dependency: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImplementationGuide.dependency.uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency',
		description: 'Where to find dependency',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ImplementationGuide.description',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-description',
		description: 'The description of the implementation guide',
	},
	experimental: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.experimental',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		description: 'For testing purposes, not real usage',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction',
		description: 'Intended jurisdiction for the implementation guide',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ImplementationGuide.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		description: 'Computationally friendly name of the implementation guide',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ImplementationGuide.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		description: 'Name of the publisher of the implementation guide',
	},
	resource: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImplementationGuide.package.resource.sourceUri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource',
		description: 'Location of the resource',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-status',
		description: 'The current status of the implementation guide',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImplementationGuide.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-url',
		description: 'The uri that identifies the implementation guide',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		description: 'The business version of the implementation guide',
	},
};
