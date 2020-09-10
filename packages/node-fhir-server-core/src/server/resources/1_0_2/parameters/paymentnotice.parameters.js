/**
 * @name exports
 * @static
 * @summary Arguments for the paymentnotice query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentNotice.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier',
		description: 'The business identifier of the Eligibility',
	},
};
