module.exports = {
	AUTHOR: {
		name: 'Author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-author',
		description: 'Flag creator.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-date',
		description: 'Time period when flag is active.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-encounter',
		description: 'Alert relevant during encounter.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-patient',
		description: 'The identity of a subject to list flags for.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-subject',
		description: 'The identity of a subject to list flags for.',
	},
};
