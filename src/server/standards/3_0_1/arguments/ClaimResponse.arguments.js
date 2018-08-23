module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-created',
		description: 'The creation date.',
	},
	DISPOSITION: {
		name: 'Disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition',
		description: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier',
		description: 'The identity of the claimresponse.',
	},
	INSURER: {
		name: 'Insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer',
		description: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'Outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome',
		description: 'The processing outcome.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-patient',
		description: 'The subject of care.',
	},
	PAYMENT_DATE: {
		name: 'Payment_date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date',
		description: 'The expected paymentDate.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request',
		description: 'The claim reference.',
	},
	REQUEST_PROVIDER: {
		name: 'Request_provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request-provider',
		description: 'The Provider of the claim.',
	},
};
