/**
 * @name exports
 * @static
 * @summary Arguments for the paymentreconciliation query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
