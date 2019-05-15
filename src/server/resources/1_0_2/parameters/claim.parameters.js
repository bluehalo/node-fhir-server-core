/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		description: 'The primary identifier of the financial resource',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		description: 'Patient',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		description: 'Processing priority requested',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		description: 'Provider responsible for the claim',
	},
	use: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.use',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		description: 'The kind of financial resource',
	},
};
