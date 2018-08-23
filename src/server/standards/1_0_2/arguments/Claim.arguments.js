module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		description: 'The primary identifier of the financial resource.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		description: 'Patient.',
	},
	PRIORITY: {
		name: 'Priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		description: 'Processing priority requested.',
	},
	PROVIDER: {
		name: 'Provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		description: 'Provider responsible for the claim.',
	},
	USE: {
		name: 'Use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		description: 'The kind of financial resource.',
	},
};
