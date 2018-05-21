/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'A code defined in the code system',
	},
	CONTENT_MODE: {
		name: 'content-mode',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'not-present | example | fragment | complete',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The code system publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The description of the code system',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'External identifier for the code system',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'Intended jurisdiction for the code system',
	},
	LANGUAGE: {
		name: 'language',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'A language in which a designation is provided',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'Computationally friendly name of the code system',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'Name of the publisher of the code system',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The current status of the code system',
	},
	SYSTEM: {
		name: 'system',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The system for any codes defined by this code system (same as '
		url')',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The human-friendly name of the code system',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The uri that identifies the code system',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#codesystem',
		documentation: 'The business version of the code system',
	},
};
