module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created',
		description: 'The creation date.',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition',
		description: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier',
		description: 'The business identifier of the Explanation of Benefit.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-organization',
		description: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome',
		description: 'The processing outcome.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request',
		description: 'The reference to the claim.',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-organization',
		description: 'The organization who generated this resource.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-provider',
		description: 'The reference to the provider who sumbitted the claim.',
	},
};
