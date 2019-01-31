/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EligibilityRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier',
		description: 'The business identifier of the Eligibility',
	},
};
