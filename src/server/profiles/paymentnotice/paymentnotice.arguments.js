/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'Creation date fro the notice',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The business identifier of the notice',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The organization who generated this resource',
	},
	PAYMENT_STATUS: {
		name: 'payment-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The type of payment notice',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The reference to the provider',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The Claim',
	},
	RESPONSE: {
		name: 'response',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The ClaimResponse',
	},
	STATUSDATE: {
		name: 'statusdate',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#paymentnotice',
		documentation: 'The date of the payment action',
	},
};
