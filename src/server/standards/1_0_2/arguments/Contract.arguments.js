module.exports = {
	ACTOR: {
		name: 'Actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-actor',
		description: 'Contract Actor Type.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		description: 'The identity of the contract.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		description: 'The identity of the target of the contract (if a patient).',
	},
	SIGNER: {
		name: 'Signer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-signer',
		description: 'Contract Signatory Party.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-subject',
		description: 'The identity of the target of the contract.',
	},
};
