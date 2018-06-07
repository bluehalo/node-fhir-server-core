/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The creation date',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The contents of the disposition message',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The business identifier of the Explanation of Benefit',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The organization who generated this resource',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The processing outcome',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The reference to the claim',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The organization who generated this resource',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentreconciliation',
		documentation: 'The reference to the provider who sumbitted the claim',
	},
};
