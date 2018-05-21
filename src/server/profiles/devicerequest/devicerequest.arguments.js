/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHORED_ON: {
		name: 'authored-on',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'When the request transitioned to being actionable',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Plan/proposal/order fulfilled by this request',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Code for what is being requested/ordered',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Protocol or definition followed by this request',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Reference to resource that is being requested/ordered',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Encounter or Episode during which request was created',
	},
	EVENT_DATE: {
		name: 'event-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'When service should occur',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Composite request this is part of',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Business identifier for request/order',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'proposal | plan | original-order |reflex-order',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Individual the service is ordered for',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Desired performer for service',
	},
	PRIORREQUEST: {
		name: 'priorrequest',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Request takes the place of referenced completed or terminated requests',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Who/what is requesting service ',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'entered-in-error | draft | active |suspended | completed ',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicerequest',
		documentation: 'Individual the service is ordered for',
	},
};
