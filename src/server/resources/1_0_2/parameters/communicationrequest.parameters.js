/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.category',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-category',
		description: 'Message category',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter',
		description: 'Encounter leading to message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier',
		description: 'Unique identifier',
	},
	medium: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.medium',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium',
		description: 'A channel of communication',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient',
		description: 'Focus of message',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority',
		description: 'Message urgency',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient',
		description: 'Message recipient',
	},
	requested: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CommunicationRequest.requestedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requested',
		description: 'When ordered or proposed',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.requester',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester',
		description: 'An individual who requested a communication',
	},
	sender: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.sender',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender',
		description: 'Message sender',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-status',
		description:
			'proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject',
		description: 'Focus of message',
	},
	time: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CommunicationRequest.scheduledDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-time',
		description: 'When scheduled',
	},
};
