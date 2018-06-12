/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentrequest',
		documentation: 'The business identifier of the Enrollment',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentrequest',
		documentation: 'The organization who generated this resource',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentrequest',
		documentation: 'The party to be enrolled',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentrequest',
		documentation: 'The party to be enrolled',
	},
};
