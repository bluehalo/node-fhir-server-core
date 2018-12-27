module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-category',
		documentation: 'Which diagnostic discipline/department created the report.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-code',
		documentation:
			'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-date',
		documentation: 'The clinically relevant time of the report.',
	},
	DIAGNOSIS: {
		name: 'diagnosis',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-diagnosis',
		documentation: 'A coded diagnosis on the report.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-encounter',
		documentation: 'The Encounter when the order was made.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-identifier',
		documentation: 'An identifier for the report.',
	},
	IMAGE: {
		name: 'image',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-image',
		documentation: 'A reference to the image source.',
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued',
		documentation: 'When the report was issued.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-patient',
		documentation: 'The subject of the report if a patient.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer',
		documentation: 'Who was the source of the report (organization).',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-request',
		documentation: 'Reference to the test or procedure request.',
	},
	RESULT: {
		name: 'result',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-result',
		documentation: 'Link to an atomic result (observation resource).',
	},
	SPECIMEN: {
		name: 'specimen',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen',
		documentation: 'The specimen details.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-status',
		documentation: 'The status of the report.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject',
		documentation: 'The subject of the report.',
	},
};
