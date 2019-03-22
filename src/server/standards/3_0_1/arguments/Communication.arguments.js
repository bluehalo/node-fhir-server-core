/**
 * @name exports
 * @static
 * @summary Arguments for the communication query
 */
module.exports = {
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-based-on',
		description: 'Request fulfilled by this communication',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Communication.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-category',
		description: 'Message category',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.context',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-context',
		description: 'Encounter or episode leading to message',
	},
	definition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.definition',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-definition',
		description: 'Instantiates protocol or definition',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.context',
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
	'part-of': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-part-of',
		description: 'Part of this action',
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
		description: 'preparation | in-progress | suspended | aborted | completed | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Communication.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-subject',
		description: 'Focus of message',
	},
};
