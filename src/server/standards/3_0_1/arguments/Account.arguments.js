module.exports = {
	BALANCE: {
		name: 'balance',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-balance',
		documentation: 'How much is in account?.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-identifier',
		documentation: 'Account number.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-name',
		documentation: 'Human-readable label.',
	},
	OWNER: {
		name: 'owner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-owner',
		documentation: 'Who is responsible?.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-patient',
		documentation: 'What is account tied to?.',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-period',
		documentation: 'Transaction window.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-status',
		documentation: 'active | inactive | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-subject',
		documentation: 'What is account tied to?.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-type',
		documentation: 'E.g. patient, expense, depreciation.',
	},
};
