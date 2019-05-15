/**
 * @name exports
 * @static
 * @summary Arguments for the careplan query
 */
module.exports = {
	activitycode: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CarePlan.activity.detail.code',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activitycode',
		description: 'Detail type of activity',
	},
	activitydate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CarePlan.activity.detail.scheduledTiming',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activitydate',
		description: 'Specified date occurs within period specified by CarePlan.activity.timingSchedule',
	},
	activityreference: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.activity.reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activityreference',
		description: 'Activity details defined in specific resource',
	},
	condition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.addresses',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-condition',
		description: 'Health issues this plan addresses',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CarePlan.period',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-date',
		description: 'Time period plan covers',
	},
	goal: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.goal',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-goal',
		description: 'Desired outcome of plan',
	},
	participant: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.participant.member',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-participant',
		description: 'Who is involved',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-patient',
		description: 'Who care plan is for',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.activity.detail.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-performer',
		description:
			"Matches if the practitioner is listed as a performer in any of the 'simple' activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.)",
	},
	related: {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-related',
		description: 'A combination of the type of relationship and the related plan',
	},
	relatedcode: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CarePlan.relatedPlan.code',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-relatedcode',
		description: 'includes | replaces | fulfills',
	},
	relatedplan: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.relatedPlan.plan',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-relatedplan',
		description: 'Plan relationship exists with',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CarePlan.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-subject',
		description: 'Who care plan is for',
	},
};
