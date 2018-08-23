module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-category',
		description: 'Message category.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-encounter',
		description: 'Encounter leading to message.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-identifier',
		description: 'Unique identifier.',
	},
	MEDIUM: {
		name: 'Medium',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-medium',
		description: 'A channel of communication.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-patient',
		description: 'Focus of message.',
	},
	RECEIVED: {
		name: 'Received',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-received',
		description: 'When received.',
	},
	RECIPIENT: {
		name: 'Recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-recipient',
		description: 'Message recipient.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-request',
		description: 'CommunicationRequest producing this message.',
	},
	SENDER: {
		name: 'Sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sender',
		description: 'Message sender.',
	},
	SENT: {
		name: 'Sent',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sent',
		description: 'When sent.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-status',
		description: 'in-progress | completed | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-subject',
		description: 'Focus of message.',
	},
};
