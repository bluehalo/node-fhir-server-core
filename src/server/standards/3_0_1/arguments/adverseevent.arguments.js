/**
 * @name exports
 * @static
 * @summary Arguments for the adverseevent query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.category',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-category',
		description:
			'AE | PAE  An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AdverseEvent.date',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-date',
		description: 'When the event occurred',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.location',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-location',
		description: 'Location where adverse event occurred',
	},
	reaction: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.reaction',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-reaction',
		description: 'Adverse Reaction Events linked to exposure to substance',
	},
	recorder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.recorder',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder',
		description: 'Who recorded the adverse event',
	},
	seriousness: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.seriousness',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness',
		description: 'Mild | Moderate | Severe',
	},
	study: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.study',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-study',
		description: 'AdverseEvent.study',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-subject',
		description: 'Subject or group impacted by event',
	},
	substance: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.suspectEntity.instance',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-substance',
		description: 'Refers to the specific entity that caused the adverse event',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.type',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-type',
		description: 'actual | potential',
	},
};
