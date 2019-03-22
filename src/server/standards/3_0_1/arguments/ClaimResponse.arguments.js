/**
 * @name exports
 * @static
 * @summary Arguments for the claimresponse query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ClaimResponse.created',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-created',
		description: 'The creation date',
	},
	disposition: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ClaimResponse.disposition',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition',
		description: 'The contents of the disposition message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClaimResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier',
		description: 'The identity of the claimresponse',
	},
	insurer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClaimResponse.insurer',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer',
		description: 'The organization who generated this resource',
	},
	outcome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClaimResponse.outcome',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome',
		description: 'The processing outcome',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClaimResponse.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-patient',
		description: 'The subject of care.',
	},
	'payment-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ClaimResponse.payment.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date',
		description: 'The expected paymentDate',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClaimResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request',
		description: 'The claim reference',
	},
	'request-provider': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClaimResponse.requestProvider',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-request-provider',
		description: 'The Provider of the claim',
	},
};
