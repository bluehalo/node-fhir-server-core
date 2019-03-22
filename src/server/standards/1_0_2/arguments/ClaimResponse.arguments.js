/**
 * @name exports
 * @static
 * @summary Arguments for the claimresponse query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClaimResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier',
		description: 'The identity of the insurer',
	},
};
