/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentresponse',
		documentation: 'The business identifier of the EnrollmentResponse',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentresponse',
		documentation: 'The organization who generated this resource',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#enrollmentresponse',
		documentation: 'The reference to the claim',
	},
};
