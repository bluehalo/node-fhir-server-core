module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-date',
		description: 'Start and end of participation.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier',
		description: 'Business Identifier for research subject.',
	},
	INDIVIDUAL: {
		name: 'Individual',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-individual',
		description: 'Who is part of study.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-patient',
		description: 'Who is part of study.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-status',
		description: 'candidate | enrolled | active | suspended | withdrawn | completed.',
	},
};
