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
		description: 'The business identifier of the Explanation of Benefit',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-organization',
		description: 'The organization who generated this resource',
	},
	outcome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.outcome',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome',
		description: 'The processing outcome',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.request',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request',
		description: 'The reference to the claim',
	},
	'request-organization': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.requestOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-organization',
		description: 'The organization who generated this resource',
	},
	'request-provider': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.requestProvider',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-provider',
		description: 'The reference to the provider who sumbitted the claim',
	},
};
