/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticreport query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticReport.category',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-category',
		description: 'Which diagnostic discipline/department created the report',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticReport.code',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-code',
		description:
			'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DiagnosticReport.effectiveDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-date',
		description: 'The clinically relevant time of the report',
	},
	diagnosis: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticReport.codedDiagnosis',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-diagnosis',
		description: 'A coded diagnosis on the report',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-encounter',
		description: 'The Encounter when the order was made',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticReport.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-identifier',
		description: 'An identifier for the report',
	},
	image: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.image.link',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-image',
		description: 'A reference to the image source.',
	},
	issued: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DiagnosticReport.issued',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued',
		description: 'When the report was issued',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-patient',
		description: 'The subject of the report if a patient',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer',
		description: 'Who was the source of the report (organization)',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.request',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-request',
		description: 'Reference to the test or procedure request.',
	},
	result: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.result',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-result',
		description: 'Link to an atomic result (observation resource)',
	},
	specimen: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.specimen',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen',
		description: 'The specimen details',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DiagnosticReport.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-status',
		description: 'The status of the report',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject',
		description: 'The subject of the report',
	},
};
