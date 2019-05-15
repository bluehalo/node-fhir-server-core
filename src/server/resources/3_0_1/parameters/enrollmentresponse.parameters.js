/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentresponse query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EnrollmentResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier',
		description: 'The business identifier of the EnrollmentResponse',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EnrollmentResponse.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization',
		description: 'The organization who generated this resource',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EnrollmentResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request',
		description: 'The reference to the claim',
	},
};
