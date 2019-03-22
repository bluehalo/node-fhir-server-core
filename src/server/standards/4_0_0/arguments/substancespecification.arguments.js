/**
 * @name exports
 * @static
 * @summary Arguments for the substancespecification query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SubstanceSpecification.code',
		definition: 'http://hl7.org/fhir/SearchParameter/SubstanceSpecification-code',
		description: 'Codes associated with the substance',
	},
};
