module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-category',
		description: 'AE | PAE  An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-date',
		description: 'When the event occurred.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-location',
		description: 'Location where adverse event occurred.',
	},
	REACTION: {
		name: 'reaction',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-reaction',
		description: 'Adverse Reaction Events linked to exposure to substance.',
	},
	RECORDER: {
		name: 'recorder',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder',
		description: 'Who recorded the adverse event.',
	},
	SERIOUSNESS: {
		name: 'seriousness',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness',
		description: 'Mild | Moderate | Severe.',
	},
	STUDY: {
		name: 'study',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-study',
		description: 'AdverseEvent.study.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-subject',
		description: 'Subject or group impacted by event.',
	},
	SUBSTANCE: {
		name: 'substance',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-substance',
		description: 'Refers to the specific entity that caused the adverse event.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-type',
		description: 'actual | potential.',
	},
};
