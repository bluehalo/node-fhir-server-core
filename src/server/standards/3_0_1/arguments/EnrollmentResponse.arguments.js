module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier',
		description: 'The business identifier of the EnrollmentResponse.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization',
		description: 'The organization who generated this resource.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request',
		description: 'The reference to the claim.',
	},
};
