/**
 * @name exports
 * @static
 * @summary Arguments for the adverseevent query
 */
module.exports = {
	actuality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.actuality',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-actuality',
		description: 'actual | potential',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.category',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-category',
		description:
			'product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AdverseEvent.date',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-date',
		description: 'When the event occurred',
	},
	event: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.event',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-event',
		description: 'Type of the event itself in relation to the subject',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.location',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-location',
		description: 'Location where adverse event occurred',
	},
	recorder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.recorder',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder',
		description: 'Who recorded the adverse event',
	},
	resultingcondition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.resultingCondition',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-resultingcondition',
		description: 'Effect on the subject due to this event',
	},
	seriousness: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.seriousness',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness',
		description: 'Seriousness of the event',
	},
	severity: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AdverseEvent.severity',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-severity',
		description: 'mild | moderate | severe',
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
		description: 'Subject impacted by event',
	},
	substance: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AdverseEvent.suspectEntity.instance',
		definition: 'http://hl7.org/fhir/SearchParameter/AdverseEvent-substance',
		description: 'Refers to the specific entity that caused the adverse event',
	},
};
