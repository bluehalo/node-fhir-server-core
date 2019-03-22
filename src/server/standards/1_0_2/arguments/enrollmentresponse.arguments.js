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
		description: 'The business identifier of the Explanation of Benefit',
	},
};
