module.exports = {
	BALANCE: {
		name: 'Balance',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-balance',
		description: 'How much is in account?.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-identifier',
		description: 'Account number.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-name',
		description: 'Human-readable label.',
	},
	OWNER: {
		name: 'Owner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-owner',
		description: 'Who is responsible?.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-patient',
		description: 'What is account tied to?.',
	},
	PERIOD: {
		name: 'Period',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-period',
		description: 'Transaction window.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-status',
		description: 'active | inactive | entered-in-error.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-subject',
		description: 'What is account tied to?.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-type',
		description: 'E.g. patient, expense, depreciation.',
	},
};
