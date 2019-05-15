/**
 * @name exports
 * @static
 * @summary Arguments for the messagedefinition query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.category',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-category',
		description: 'The behavior associated with the message',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MessageDefinition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-date',
		description: 'The message definition publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageDefinition.description',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-description',
		description: 'The description of the message definition',
	},
	event: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.event',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-event',
		description: 'The event that triggers the message',
	},
	focus: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.focus.code',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-focus',
		description: 'A resource that is a permitted focus of the message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-identifier',
		description: 'External identifier for the message definition',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-jurisdiction',
		description: 'Intended jurisdiction for the message definition',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageDefinition.name',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-name',
		description: 'Computationally friendly name of the message definition',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageDefinition.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-publisher',
		description: 'Name of the publisher of the message definition',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-status',
		description: 'The current status of the message definition',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageDefinition.title',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-title',
		description: 'The human-friendly name of the message definition',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'MessageDefinition.url',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-url',
		description: 'The uri that identifies the message definition',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageDefinition.version',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-version',
		description: 'The business version of the message definition',
	},
};
