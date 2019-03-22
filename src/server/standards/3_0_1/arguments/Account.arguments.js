/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
	balance: {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'Account.balance',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-balance',
		description: 'How much is in account?',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Account.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-identifier',
		description: 'Account number',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Account.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-name',
		description: 'Human-readable label',
	},
	owner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Account.owner',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-owner',
		description: 'Who is responsible?',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Account.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-patient',
		description: 'What is account tied to?',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Account.period',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-period',
		description: 'Transaction window',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Account.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-status',
		description: 'active | inactive | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Account.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-subject',
		description: 'What is account tied to?',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Account.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-type',
		description: 'E.g. patient, expense, depreciation',
	},
};
