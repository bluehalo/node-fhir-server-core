/**
 * @name exports
 * @static
 * @summary Arguments for the communication query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Communication.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-category',
		description: 'Message category',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-encounter',
		description: 'Encounter leading to message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Communication.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-identifier',
		description: 'Unique identifier',
	},
	medium: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Communication.medium',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-medium',
		description: 'A channel of communication',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-patient',
		description: 'Focus of message',
	},
	received: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Communication.received',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-received',
		description: 'When received',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-recipient',
		description: 'Message recipient',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.requestDetail',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-request',
		description: 'CommunicationRequest producing this message',
	},
	sender: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.sender',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sender',
		description: 'Message sender',
	},
	sent: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Communication.sent',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sent',
		description: 'When sent',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Communication.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-status',
		description: 'in-progress | completed | suspended | rejected | failed',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-subject',
		description: 'Focus of message',
	},
};
