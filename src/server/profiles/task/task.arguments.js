/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHORED_ON: {
		name: 'authored-on',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by creation date',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by requests this task is based on',
	},
	BUSINESS_STATUS: {
		name: 'business-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by business status',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task code',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by encounter or episode',
	},
	FOCUS: {
		name: 'focus',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task focus',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by group identifier',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search for a task instance by its business identifier',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task intent',
	},
	MODIFIED: {
		name: 'modified',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by last modification date',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by responsible organization',
	},
	OWNER: {
		name: 'owner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task owner',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task this task is part of',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by patient',
	},
	PERFORMER: {
		name: 'performer',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by recommended type of performer (e.g., Requester, Performer, Scheduler).',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by period Task is/was underway',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task priority',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task requester',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by task status',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#task',
		documentation: 'Search by subject',
	},
};
