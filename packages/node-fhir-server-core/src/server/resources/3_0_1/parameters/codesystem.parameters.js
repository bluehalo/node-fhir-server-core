/**
 * @name exports
 * @static
 * @summary Arguments for the codesystem query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.concept.code',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-code',
		description: 'A code defined in the code system',
	},
	'content-mode': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.content',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode',
		description: 'not-present | example | fragment | complete',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CodeSystem.date',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-date',
		description: 'The code system publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CodeSystem.description',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-description',
		description: 'The description of the code system',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-identifier',
		description: 'External identifier for the code system',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-jurisdiction',
		description: 'Intended jurisdiction for the code system',
	},
	language: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.concept.designation.language',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-language',
		description: 'A language in which a designation is provided',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CodeSystem.name',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-name',
		description: 'Computationally friendly name of the code system',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CodeSystem.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-publisher',
		description: 'Name of the publisher of the code system',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.status',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-status',
		description: 'The current status of the code system',
	},
	system: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'CodeSystem.url',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-system',
		description: "The system for any codes defined by this code system (same as 'url')",
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CodeSystem.title',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-title',
		description: 'The human-friendly name of the code system',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'CodeSystem.url',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-url',
		description: 'The uri that identifies the code system',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CodeSystem.version',
		definition: 'http://hl7.org/fhir/SearchParameter/CodeSystem-version',
		description: 'The business version of the code system',
	},
};
