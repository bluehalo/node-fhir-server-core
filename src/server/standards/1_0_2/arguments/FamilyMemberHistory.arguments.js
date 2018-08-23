module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-code',
		description: 'A search by a condition code.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-date',
		description: 'When history was captured/updated.',
	},
	GENDER: {
		name: 'Gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-gender',
		description: 'A search by a gender code of a family member.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-identifier',
		description: 'A search by a record identifier.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-patient',
		description: 'The identity of a subject to list family member history items for.',
	},
	RELATIONSHIP: {
		name: 'Relationship',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship',
		description: 'A search by a relationship type.',
	},
	CONDITION: {
		name: 'Condition',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/familymemberhistory-daf-FamilyMemberHistory-condition',
		description: 'Search for a history of a particular condition within a patient\'s family.',
	},
	RELATIONSHIP: {
		name: 'Relationship',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/familymemberhistory-daf-FamilyMemberHistory-relationship',
		description: 'Search for family history of members based on relationship.',
	},
};
