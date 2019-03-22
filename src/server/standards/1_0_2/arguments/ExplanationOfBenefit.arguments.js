/**
 * @name exports
 * @static
 * @summary Arguments for the explanationofbenefit query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExplanationOfBenefit.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
