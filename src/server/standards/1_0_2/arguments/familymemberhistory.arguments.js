/**
 * @name exports
 * @static
 * @summary Arguments for the familymemberhistory query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.condition.code',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-code',
		description: 'A search by a condition code',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'FamilyMemberHistory.date',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-date',
		description: 'When history was captured/updated',
	},
	gender: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.gender',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-gender',
		description: 'A search by a gender code of a family member',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-identifier',
		description: 'A search by a record identifier',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'FamilyMemberHistory.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-patient',
		description: 'The identity of a subject to list family member history items for',
	},
	relationship: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.relationship',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship',
		description: 'A search by a relationship type',
	},
	condition: {
		type: 'token',
		fhirtype: 'token',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/familymemberhistory-daf-FamilyMemberHistory-condition',
		description: "Search for a history of a particular condition within a patient's family.",
	},
};
