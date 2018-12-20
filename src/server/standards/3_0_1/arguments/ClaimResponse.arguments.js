module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-created',
		documentation: 'The creation date.',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition',
		documentation: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier',
		documentation: 'The identity of the claimresponse.',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer',
		documentation: 'The organization who generated this resource.',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome',
		documentation: 'The processing outcome.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-patient',
		documentation: 'The subject of care.',
	},
	PAYMENT_DATE: {
		name: 'payment-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date',
		documentation: 'The expected paymentDate.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request',
		documentation: 'The claim reference.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request-provider',
		documentation: 'The Provider of the claim.',
	},
};
