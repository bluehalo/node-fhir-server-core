module.exports = {
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-actor',
		documentation: 'Who recorded or did this.',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-bodysite',
		documentation: 'Location of requested test (if applicable).',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-code',
		documentation: 'Code to indicate the item (test or panel) being ordered.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-encounter',
		documentation: 'The encounter that this diagnostic order is associated with.',
	},
	EVENT_DATE: {
		name: 'event-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-date',
		documentation: 'The date at which the event happened.',
	},
	EVENT_STATUS: {
		name: 'event-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status',
		documentation:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed.',
	},
	EVENT_STATUS_DATE: {
		name: 'event-status-date',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status-date',
		documentation: 'A combination of past-status and date.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-identifier',
		documentation: 'Identifiers assigned to this order.',
	},
	ITEM_DATE: {
		name: 'item-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-date',
		documentation: 'The date at which the event happened.',
	},
	ITEM_PAST_STATUS: {
		name: 'item-past-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-past-status',
		documentation:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed.',
	},
	ITEM_STATUS: {
		name: 'item-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status',
		documentation:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed.',
	},
	ITEM_STATUS_DATE: {
		name: 'item-status-date',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status-date',
		documentation: 'A combination of item-past-status and item-date.',
	},
	ORDERER: {
		name: 'orderer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-orderer',
		documentation: 'Who ordered the test.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-patient',
		documentation: 'Who and/or what test is about.',
	},
	SPECIMEN: {
		name: 'specimen',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-specimen',
		documentation: 'If the whole order relates to specific specimens.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-status',
		documentation:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-subject',
		documentation: 'Who and/or what test is about.',
	},
};
