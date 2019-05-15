/**
 * @name exports
 * @static
 * @summary Arguments for the paymentnotice query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'PaymentNotice.created',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-created',
		description: 'Creation date fro the notice',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentNotice.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier',
		description: 'The business identifier of the notice',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentNotice.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-organization',
		description: 'The organization who generated this resource',
	},
	'payment-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentNotice.paymentStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status',
		description: 'The type of payment notice',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentNotice.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-provider',
		description: 'The reference to the provider',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentNotice.request',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-request',
		description: 'The Claim',
	},
	response: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PaymentNotice.response',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-response',
		description: 'The ClaimResponse',
	},
	statusdate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'PaymentNotice.statusDate',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate',
		description: 'The date of the payment action',
	},
};
