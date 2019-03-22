/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentrequest query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EnrollmentRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier',
		description: 'The business identifier of the Enrollment',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EnrollmentRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient',
		description: 'The party to be enrolled',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EnrollmentRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject',
		description: 'The party to be enrolled',
	},
};
