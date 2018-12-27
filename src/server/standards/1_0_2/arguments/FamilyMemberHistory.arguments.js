module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-code',
		documentation: 'A search by a condition code.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-date',
		documentation: 'When history was captured/updated.',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-gender',
		documentation: 'A search by a gender code of a family member.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-identifier',
		documentation: 'A search by a record identifier.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-patient',
		documentation: 'The identity of a subject to list family member history items for.',
	},
	RELATIONSHIP: {
		name: 'relationship',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship',
		documentation: 'A search by a relationship type.',
	},
	CONDITION: {
		name: 'condition',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/familymemberhistory-daf-FamilyMemberHistory-condition',
		documentation: "Search for a history of a particular condition within a patient's family.",
	},
};
