module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created',
		description: 'The creation date.',
	},
	DISPOSITION: {
		name: 'Disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition',
		description: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier',
		description: 'The business identifier of the Explanation of Benefit.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-organization',
		description: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'Outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome',
		description: 'The processing outcome.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request',
		description: 'The reference to the claim.',
	},
	REQUEST_ORGANIZATION: {
		name: 'Request_organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-organization',
		description: 'The organization who generated this resource.',
	},
	REQUEST_PROVIDER: {
		name: 'Request_provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-provider',
		description: 'The reference to the provider who sumbitted the claim.',
	},
};
