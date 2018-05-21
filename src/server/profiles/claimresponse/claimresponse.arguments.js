/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The creation date',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The contents of the disposition message',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The identity of the claimresponse',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The organization who generated this resource',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The processing outcome',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The subject of care.',
	},
	PAYMENT_DATE: {
		name: 'payment-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The expected paymentDate',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The claim reference',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claimresponse',
		documentation: 'The Provider of the claim',
	},
};
