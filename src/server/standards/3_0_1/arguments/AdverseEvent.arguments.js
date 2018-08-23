module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-category',
		description: 'AE | PAE  An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-date',
		description: 'When the event occurred.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-location',
		description: 'Location where adverse event occurred.',
	},
	REACTION: {
		name: 'Reaction',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-reaction',
		description: 'Adverse Reaction Events linked to exposure to substance.',
	},
	RECORDER: {
		name: 'Recorder',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder',
		description: 'Who recorded the adverse event.',
	},
	SERIOUSNESS: {
		name: 'Seriousness',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness',
		description: 'Mild | Moderate | Severe.',
	},
	STUDY: {
		name: 'Study',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-study',
		description: 'AdverseEvent.study.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-subject',
		description: 'Subject or group impacted by event.',
	},
	SUBSTANCE: {
		name: 'Substance',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-substance',
		description: 'Refers to the specific entity that caused the adverse event.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-type',
		description: 'actual | potential.',
	},
};
