/**
 * @name exports
 * @static
 * @summary Arguments for the verificationresult query
 */
module.exports = {
	target: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'VerificationResult.target',
		definition: 'http://hl7.org/fhir/SearchParameter/VerificationResult-target',
		description: 'A resource that was validated',
	},
};
