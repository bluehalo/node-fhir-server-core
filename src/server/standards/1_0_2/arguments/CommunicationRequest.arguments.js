module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-category',
		documentation: 'Message category.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter',
		documentation: 'Encounter leading to message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier',
		documentation: 'Unique identifier.',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium',
		documentation: 'A channel of communication.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient',
		documentation: 'Focus of message.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority',
		documentation: 'Message urgency.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient',
		documentation: 'Message recipient.',
	},
	REQUESTED: {
		name: 'requested',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requested',
		documentation: 'When ordered or proposed.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester',
		documentation: 'An individual who requested a communication.',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender',
		documentation: 'Message sender.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-status',
		documentation:
			'proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject',
		documentation: 'Focus of message.',
	},
	TIME: {
		name: 'time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-time',
		documentation: 'When scheduled.',
	},
};
