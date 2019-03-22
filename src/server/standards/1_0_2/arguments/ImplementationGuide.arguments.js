/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.useContext',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-context',
		description: 'A use context assigned to the structure',
	},
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
		description: 'Text search in the description of the implementation guide',
	},
	experimental: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.experimental',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental',
		description: 'If for testing purposes, not real usage',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ImplementationGuide.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-name',
		description: 'Name of the implementation guide',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ImplementationGuide.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher',
		description: 'Name of the publisher of the implementation guide',
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
		description: 'Absolute URL used to reference this Implementation Guide',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImplementationGuide.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ImplementationGuide-version',
		description: 'The version identifier of the implementation guide',
	},
};
