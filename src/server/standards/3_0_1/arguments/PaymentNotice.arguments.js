module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-created',
		description: 'Creation date fro the notice.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier',
		description: 'The business identifier of the notice.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-organization',
		description: 'The organization who generated this resource.',
	},
	PAYMENT_STATUS: {
		name: 'payment-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status',
		description: 'The type of payment notice.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-provider',
		description: 'The reference to the provider.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-request',
		description: 'The Claim.',
	},
	RESPONSE: {
		name: 'response',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-response',
		description: 'The ClaimResponse.',
	},
	STATUSDATE: {
		name: 'statusdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate',
		description: 'The date of the payment action.',
	},
};
