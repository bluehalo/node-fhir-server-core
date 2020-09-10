/**
 * @name exports
 * @static
 * @summary Arguments for the paymentreconciliation query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'PaymentReconciliation.created',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created',
		description: 'The creation date',
	},
	disposition: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'PaymentReconciliation.disposition',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition',
		description: 'The contents of the disposition message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier',
		description: 'The business identifier of the ExplanationOfBenefit',
	},
	outcome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.outcome',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome',
		description: 'The processing outcome',
	},
	'payment-issuer': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.paymentIssuer',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-payment-issuer',
		description: 'The organization which generated this resource',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.request',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request',
		description: 'The reference to the claim',
	},
	requestor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.requestor',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-requestor',
		description: 'The reference to the provider who submitted the claim',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.status',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-status',
		description: 'The status of the payment reconciliation',
	},
};
