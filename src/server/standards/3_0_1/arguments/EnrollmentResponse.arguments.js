module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier',
		documentation: 'The business identifier of the EnrollmentResponse.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization',
		documentation: 'The organization who generated this resource.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request',
		documentation: 'The reference to the claim.',
	},
};
