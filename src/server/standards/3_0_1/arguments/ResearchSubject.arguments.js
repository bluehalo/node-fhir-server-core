module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-date',
		description: 'Start and end of participation.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier',
		description: 'Business Identifier for research subject.',
	},
	INDIVIDUAL: {
		name: 'individual',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-individual',
		description: 'Who is part of study.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-patient',
		description: 'Who is part of study.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-status',
		description: 'candidate | enrolled | active | suspended | withdrawn | completed.',
	},
};
