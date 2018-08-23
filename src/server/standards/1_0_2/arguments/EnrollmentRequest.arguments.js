module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier',
		description: 'The business identifier of the Enrollment.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient',
		description: 'The party to be enrolled.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject',
		description: 'The party to be enrolled.',
	},
};
