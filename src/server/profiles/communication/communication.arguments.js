/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Request fulfilled by this communication',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Message category',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Encounter or episode leading to message',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Instantiates protocol or definition',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Encounter leading to message',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Unique identifier',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'A channel of communication',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Part of this action',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Focus of message',
	},
	RECEIVED: {
		name: 'received',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'When received',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Message recipient',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Message sender',
	},
	SENT: {
		name: 'sent',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'When sent',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'preparation | in-progress | suspended | aborted | completed | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communication',
		documentation: 'Focus of message',
	},
};
