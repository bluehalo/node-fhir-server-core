module.exports = {
	AUTHOR: {
		name: 'Author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-author',
		description: 'The provider or device that identified the issue.',
	},
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-category',
		description: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-date',
		description: 'When identified.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-identifier',
		description: 'Unique id for the detected issue.',
	},
	IMPLICATED: {
		name: 'Implicated',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated',
		description: 'Problem resource.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-patient',
		description: 'Associated patient.',
	},
};
