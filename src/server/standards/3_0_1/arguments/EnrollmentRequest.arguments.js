module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier',
		documentation: 'The business identifier of the Enrollment.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-organization',
		documentation: 'The organization who generated this resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient',
		documentation: 'The party to be enrolled.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject',
		documentation: 'The party to be enrolled.',
	},
};
