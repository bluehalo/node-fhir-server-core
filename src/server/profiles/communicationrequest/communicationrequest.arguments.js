/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'When request transitioned to being actionable',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Fulfills plan or proposal',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Message category',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Encounter or episode leading to message',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Encounter leading to message',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Composite request this is part of',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Unique identifier',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'A channel of communication',
	},
	OCCURRENCE: {
		name: 'occurrence',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'When scheduled',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Focus of message',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Message urgency',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Message recipient',
	},
	REPLACES: {
		name: 'replaces',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Request(s) replaced by this request',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Individual making the request',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Message sender',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'draft | active | suspended | cancelled | completed | entered-in-error | unknown',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#communicationrequest',
		documentation: 'Focus of message',
	},
};
