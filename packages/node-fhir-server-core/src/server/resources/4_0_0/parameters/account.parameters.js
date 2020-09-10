/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
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
		description: 'Entity managing the Account',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Account.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-patient',
		description: 'The entity that caused the expenses',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Account.servicePeriod',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-period',
		description: 'Transaction window',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Account.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-status',
		description: 'active | inactive | entered-in-error | on-hold | unknown',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Account.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-subject',
		description: 'The entity that caused the expenses',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Account.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Account-type',
		description: 'E.g. patient, expense, depreciation',
	},
};
