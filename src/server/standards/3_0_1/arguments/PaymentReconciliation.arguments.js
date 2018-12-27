module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created',
		documentation: 'The creation date.',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition',
		documentation: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier',
		documentation: 'The business identifier of the Explanation of Benefit.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-organization',
		documentation: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome',
		documentation: 'The processing outcome.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request',
		documentation: 'The reference to the claim.',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-organization',
		documentation: 'The organization who generated this resource.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-provider',
		documentation: 'The reference to the provider who sumbitted the claim.',
	},
};
