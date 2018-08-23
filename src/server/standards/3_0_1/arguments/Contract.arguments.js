module.exports = {
	AGENT: {
		name: 'Agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-agent',
		description: 'Agent to the Contact.',
	},
	AUTHORITY: {
		name: 'Authority',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-authority',
		description: 'The authority of the contract.',
	},
	DOMAIN: {
		name: 'Domain',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-domain',
		description: 'The domain of the contract.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		description: 'The identity of the contract.',
	},
	ISSUED: {
		name: 'Issued',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-issued',
		description: 'The date/time the contract was issued.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		description: 'The identity of the subject of the contract (if a patient).',
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
		description: 'The identity of the subject of the contract.',
	},
	TERM_TOPIC: {
		name: 'Term_topic',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-term-topic',
		description: 'The identity of the topic of the contract terms.',
	},
};
