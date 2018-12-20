module.exports = {
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-actor',
		documentation: 'Contract Actor Type.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		documentation: 'The identity of the contract.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		documentation: 'The identity of the target of the contract (if a patient).',
	},
	SIGNER: {
		name: 'signer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-signer',
		documentation: 'Contract Signatory Party.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-subject',
		documentation: 'The identity of the target of the contract.',
	},
};
