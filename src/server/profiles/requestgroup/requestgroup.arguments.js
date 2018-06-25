/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The author of the request group',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The date the request group was authored',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The context the request group applies to',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The definition from which the request group is realized',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The encounter the request group applies to',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The group identifier for the request group',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'External identifiers for the request group',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The intent of the request group',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The participant in the requests in the group',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The identity of a patient to search for request groups',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The priority of the request group',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The status of the request group',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#requestgroup',
		documentation: 'The subject that the request group is about',
	},
};
