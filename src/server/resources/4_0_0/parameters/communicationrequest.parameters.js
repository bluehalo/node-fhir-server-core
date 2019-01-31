/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	authored: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CommunicationRequest.authoredOn',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-authored',
		description: 'When request transitioned to being actionable',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-based-on',
		description: 'Fulfills plan or proposal',
	},
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
		description: 'Encounter created as part of',
	},
	'group-identifier': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CommunicationRequest.groupIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-group-identifier',
		description: 'Composite request this is part of',
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
	occurrence: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CommunicationRequest.occurrenceDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-occurrence',
		description: 'When scheduled',
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
	replaces: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.replaces',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-replaces',
		description: 'Request(s) replaced by this request',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.requester',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester',
		description: 'Who/what is requesting service',
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
		description: 'draft | active | suspended | cancelled | completed | entered-in-error | unknown',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject',
		description: 'Focus of message',
	},
};
