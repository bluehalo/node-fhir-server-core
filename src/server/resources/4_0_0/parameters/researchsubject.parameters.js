/**
 * @name exports
 * @static
 * @summary Arguments for the researchsubject query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ResearchSubject.period',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-date',
		description: 'Start and end of participation',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchSubject.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier',
		description: 'Business Identifier for research subject in a study',
	},
	individual: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchSubject.individual',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-individual',
		description: 'Who is part of study',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchSubject.individual',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-patient',
		description: 'Who is part of study',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchSubject.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-status',
		description:
			'candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn',
	},
	study: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchSubject.study',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-study',
		description: 'Study subject is part of',
	},
};
