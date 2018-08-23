module.exports = {
	BALANCE: {
		name: 'balance',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-balance',
		description: 'How much is in account?.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-identifier',
		description: 'Account number.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-name',
		description: 'Human-readable label.',
	},
	OWNER: {
		name: 'owner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-owner',
		description: 'Who is responsible?.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-patient',
		description: 'What is account tied to?.',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-period',
		description: 'Transaction window.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-status',
		description: 'active | inactive.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-subject',
		description: 'What is account tied to?.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-type',
		description: 'E.g. patient, expense, depreciation.',
	},
};
