module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier',
		description: 'The business identifier of the EnrollmentResponse.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization',
		description: 'The organization who generated this resource.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request',
		description: 'The reference to the claim.',
	},
};
