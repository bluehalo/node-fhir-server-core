/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'AE | PAE An adverse event is an event that caused harm to a patient, an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'When the event occurred',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Location where adverse event occurred',
	},
	REACTION: {
		name: 'reaction',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Adverse Reaction Events linked to exposure to substance',
	},
	RECORDER: {
		name: 'recorder',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Who recorded the adverse event',
	},
	SERIOUSNESS: {
		name: 'seriousness',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Mild | Moderate | Severe',
	},
	STUDY: {
		name: 'study',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'AdverseEvent.study',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Subject or group impacted by event',
	},
	SUBSTANCE: {
		name: 'substance',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'Refers to the specific entity that caused the adverse event',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#adverseevent',
		documentation: 'actual | potential',
	},
};
