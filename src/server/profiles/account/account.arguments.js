/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BALANCE: {
		name: 'balance',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'How much is in account?',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'Account number',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'Human-readable label',
	},
	OWNER: {
		name: 'owner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'Who is responsible?',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'What is account tied to?',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'Transaction window',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'active | inactive | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'What is account tied to?',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#account',
		documentation: 'E.g. patient, expense, depreciation',
	},
};
