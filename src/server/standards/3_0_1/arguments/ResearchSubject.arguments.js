module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-date',
		documentation: 'Start and end of participation.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier',
		documentation: 'Business Identifier for research subject.',
	},
	INDIVIDUAL: {
		name: 'individual',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-individual',
		documentation: 'Who is part of study.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-patient',
		documentation: 'Who is part of study.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchSubject-status',
		documentation: 'candidate | enrolled | active | suspended | withdrawn | completed.',
	},
};
