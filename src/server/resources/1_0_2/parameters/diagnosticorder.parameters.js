/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticorder query
 */
module.exports = {
	actor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.event.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-actor',
		description: 'Who recorded or did this',
	},
	bodysite: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-bodysite',
		description: 'Location of requested test (if applicable)',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.code',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-code',
		description: 'Code to indicate the item (test or panel) being ordered',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-encounter',
		description: 'The encounter that this diagnostic order is associated with',
	},
	'event-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DiagnosticOrder.event.dateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-date',
		description: 'The date at which the event happened',
	},
	'event-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.event.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	'event-status-date': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status-date',
		description: 'A combination of past-status and date',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-identifier',
		description: 'Identifiers assigned to this order',
	},
	'item-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DiagnosticOrder.item.event.dateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-date',
		description: 'The date at which the event happened',
	},
	'item-past-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.event.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-past-status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	'item-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	'item-status-date': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status-date',
		description: 'A combination of item-past-status and item-date',
	},
	orderer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.orderer',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-orderer',
		description: 'Who ordered the test',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-patient',
		description: 'Who and/or what test is about',
	},
	specimen: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.specimen',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-specimen',
		description: 'If the whole order relates to specific specimens',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticOrder-subject',
		description: 'Who and/or what test is about',
	},
};
