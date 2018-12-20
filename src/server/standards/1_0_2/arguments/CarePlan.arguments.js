module.exports = {
	ACTIVITYCODE: {
		name: 'activitycode',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activitycode',
		documentation: 'Detail type of activity.',
	},
	ACTIVITYDATE: {
		name: 'activitydate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activitydate',
		documentation: 'Specified date occurs within period specified by CarePlan.activity.timingSchedule.',
	},
	ACTIVITYREFERENCE: {
		name: 'activityreference',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-activityreference',
		documentation: 'Activity details defined in specific resource.',
	},
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-condition',
		documentation: 'Health issues this plan addresses.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-date',
		documentation: 'Time period plan covers.',
	},
	GOAL: {
		name: 'goal',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-goal',
		documentation: 'Desired outcome of plan.',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-participant',
		documentation: 'Who is involved.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-patient',
		documentation: 'Who care plan is for.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-performer',
		documentation:
			"Matches if the practitioner is listed as a performer in any of the 'simple' activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.).",
	},
	RELATED: {
		name: 'related',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-related',
		documentation: 'A combination of the type of relationship and the related plan.',
	},
	RELATEDCODE: {
		name: 'relatedcode',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-relatedcode',
		documentation: 'includes | replaces | fulfills.',
	},
	RELATEDPLAN: {
		name: 'relatedplan',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-relatedplan',
		documentation: 'Plan relationship exists with.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CarePlan-subject',
		documentation: 'Who care plan is for.',
	},
};
