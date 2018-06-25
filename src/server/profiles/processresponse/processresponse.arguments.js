/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processresponse',
		documentation: 'The business identifier of the Explanation of Benefit',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processresponse',
		documentation: 'The organization who generated this resource',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processresponse',
		documentation: 'The reference to the claim',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processresponse',
		documentation: 'The Organization who is responsible the request transaction',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processresponse',
		documentation: 'The Provider who is responsible the request transaction',
	},
};
