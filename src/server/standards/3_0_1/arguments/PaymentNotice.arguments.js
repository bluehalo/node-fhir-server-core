module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-created',
		documentation: 'Creation date fro the notice.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier',
		documentation: 'The business identifier of the notice.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-organization',
		documentation: 'The organization who generated this resource.',
	},
	PAYMENT_STATUS: {
		name: 'payment-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status',
		documentation: 'The type of payment notice.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-provider',
		documentation: 'The reference to the provider.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-request',
		documentation: 'The Claim.',
	},
	RESPONSE: {
		name: 'response',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-response',
		documentation: 'The ClaimResponse.',
	},
	STATUSDATE: {
		name: 'statusdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate',
		documentation: 'The date of the payment action.',
	},
};
