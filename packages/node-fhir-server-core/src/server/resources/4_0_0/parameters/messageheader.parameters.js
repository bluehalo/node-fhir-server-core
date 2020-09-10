/**
 * @name exports
 * @static
 * @summary Arguments for the messageheader query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.author',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-author',
		description: 'The source of the decision',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageHeader.response.code',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-code',
		description: 'ok | transient-error | fatal-error',
	},
	destination: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageHeader.destination.name',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-destination',
		description: 'Name of system',
	},
	'destination-uri': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'MessageHeader.destination.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-destination-uri',
		description: 'Actual destination address or id',
	},
	enterer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.enterer',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-enterer',
		description: 'The source of the data entry',
	},
	event: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageHeader.eventCoding',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-event',
		description: 'Code for the event this message represents or link to event definition',
	},
	focus: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.focus',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-focus',
		description: 'The actual content of the message',
	},
	receiver: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.destination.receiver',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-receiver',
		description: "Intended 'real-world' recipient for the data",
	},
	'response-id': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MessageHeader.response.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-response-id',
		description: 'Id of original message',
	},
	responsible: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.responsible',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-responsible',
		description: 'Final responsibility for event',
	},
	sender: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.sender',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-sender',
		description: 'Real world sender of the message',
	},
	source: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MessageHeader.source.name',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-source',
		description: 'Name of system',
	},
	'source-uri': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'MessageHeader.source.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-source-uri',
		description: 'Actual message source address or id',
	},
	target: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MessageHeader.destination.target',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-target',
		description: 'Particular delivery destination within the destination',
	},
};
