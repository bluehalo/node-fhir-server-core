/**
 * @name exports
 * @description All the possible careplan arguments defined in one place
 */
module.exports = {
ACTIVITY_CODE: {
	name: 'activity-code',
	type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Detail type of activity'
},
ACTIVITY_DATE: {
	name: 'activity-date',
	type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Specified date occurs within period specified by CarePlan.activity.timingSchedule'
},
ACTIVITY_REFERENCE: {
	name: 'activity-reference',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Activity details defined in specific resource'
},
BASED_ON: {
	name: 'based-on',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Fulfills care plan'
},
CARE_TEAM: {
	name: 'care-team',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Who\'s involved in plan?'
},
CATEGORY: {
	name: 'category',
	type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Type of plan'
},
CONDITION: {
	name: 'condition',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Health issues this plan addresses'
},
CONTEXT: {
	name: 'context',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Created in context of'
},
DATE: {
	name: 'date',
	type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Time period plan covers'
},
DEFINITION: {
	name: 'definition',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Protocol or definition'
},
ENCOUNTER: {
	name: 'encounter',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Created in context of'
},
GOAL: {
	name: 'goal',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Desired outcome of plan'
},
IDENTIFIER: {
	name: 'identifier',
	type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'External Ids for this plan'
},
INTENT: {
	name: 'intent',
	type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'proposal | plan | order | option'
},
PART_OF: {
	name: 'part-of',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Part of referenced CarePlan'
},
PATIENT: {
	name: 'patient',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Who care plan is for'
},
PERFORMER: {
	name: 'performer',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Matches if the practitioner is listed as a performer in any of the "simple" activities. (For performers of the detailed activities, chain through the activitydetail search parameter.)'
},
REPLACES: {
	name: 'replaces',
	type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'CarePlan replaced by this CarePlan'
},
STATUS: {
	name: 'status',
	type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'draft | active | suspended | completed | entered-in-error | cancelled | unknown'
},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careplan',
		documentation: 'Who care plan is for'
	},
};
