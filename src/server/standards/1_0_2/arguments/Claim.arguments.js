module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		description: 'The primary identifier of the financial resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		description: 'Patient.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		description: 'Processing priority requested.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		description: 'Provider responsible for the claim.',
	},
	USE: {
		name: 'use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		description: 'The kind of financial resource.',
	},
};
