module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-created',
		description: 'The creation date.',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition',
		description: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier',
		description: 'The identity of the claimresponse.',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer',
		description: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome',
		description: 'The processing outcome.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-patient',
		description: 'The subject of care.',
	},
	PAYMENT_DATE: {
		name: 'payment-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date',
		description: 'The expected paymentDate.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request',
		description: 'The claim reference.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request-provider',
		description: 'The Provider of the claim.',
	},
};
