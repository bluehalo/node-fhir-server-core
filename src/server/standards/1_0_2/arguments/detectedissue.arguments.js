/**
 * @name exports
 * @static
 * @summary Arguments for the detectedissue query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DetectedIssue.author',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-author',
		description: 'The provider or device that identified the issue',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DetectedIssue.category',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-category',
		description: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DetectedIssue.date',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-date',
		description: 'When identified',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DetectedIssue.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-identifier',
		description: 'Unique id for the detected issue',
	},
	implicated: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DetectedIssue.implicated',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated',
		description: 'Problem resource',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DetectedIssue.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-patient',
		description: 'Associated patient',
	},
};
