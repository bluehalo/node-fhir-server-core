/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityresponse query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EligibilityResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
