module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-category',
		documentation: 'Message category.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-encounter',
		documentation: 'Encounter leading to message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-identifier',
		documentation: 'Unique identifier.',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-medium',
		documentation: 'A channel of communication.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-patient',
		documentation: 'Focus of message.',
	},
	RECEIVED: {
		name: 'received',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-received',
		documentation: 'When received.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-recipient',
		documentation: 'Message recipient.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-request',
		documentation: 'CommunicationRequest producing this message.',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sender',
		documentation: 'Message sender.',
	},
	SENT: {
		name: 'sent',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sent',
		documentation: 'When sent.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-status',
		documentation: 'in-progress | completed | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-subject',
		documentation: 'Focus of message.',
	},
};
