/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHORED_ON: {
		name: 'authored-on',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Creation or activation date',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Request being fulfilled',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Part of encounter or episode of care',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Instantiates protocol or definition',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Originating encounter',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Part of common request',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Business identifier',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Proposal, plan or order',
	},
	OCCURRENCE_DATE: {
		name: 'occurrence-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'When the service(s) requested in the referral should occur',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Who the referral is about',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'The priority assigned to the referral',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'The person that the referral was sent to',
	},
	REPLACES: {
		name: 'replaces',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Request(s) replaced by this request',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Individual making the request',
	},
	SERVICE: {
		name: 'service',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Actions requested as part of the referral',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'The specialty that the referral is for',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'The status of the referral',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'Patient referred to care or transfer',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#referralrequest',
		documentation: 'The type of the referral',
	},
};
