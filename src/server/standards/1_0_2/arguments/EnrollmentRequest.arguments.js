module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier',
		description: 'The business identifier of the Enrollment.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient',
		description: 'The party to be enrolled.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject',
		description: 'The party to be enrolled.',
	},
};
