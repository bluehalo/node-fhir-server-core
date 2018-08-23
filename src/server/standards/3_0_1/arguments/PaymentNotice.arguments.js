module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-created',
		description: 'Creation date fro the notice.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier',
		description: 'The business identifier of the notice.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-organization',
		description: 'The organization who generated this resource.',
	},
	PAYMENT_STATUS: {
		name: 'Payment_status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status',
		description: 'The type of payment notice.',
	},
	PROVIDER: {
		name: 'Provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-provider',
		description: 'The reference to the provider.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-request',
		description: 'The Claim.',
	},
	RESPONSE: {
		name: 'Response',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-response',
		description: 'The ClaimResponse.',
	},
	STATUSDATE: {
		name: 'Statusdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate',
		description: 'The date of the payment action.',
	},
};
