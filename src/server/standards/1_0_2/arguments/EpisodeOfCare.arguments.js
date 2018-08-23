module.exports = {
	CARE_MANAGER: {
		name: 'Care_manager',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager',
		description: 'Care manager/care co-ordinator for the patient.',
	},
	CONDITION: {
		name: 'Condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition',
		description: 'Conditions/problems/diagnoses this episode of care is for.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-date',
		description: 'The provided date search value falls within the episode of care\'s period.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-identifier',
		description: 'Identifier(s) for the EpisodeOfCare.',
	},
	INCOMINGREFERRAL: {
		name: 'Incomingreferral',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incomingreferral',
		description: 'Incoming Referral Request.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization',
		description: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-patient',
		description: 'Patient for this episode of care.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status',
		description: 'The current status of the Episode of Care as provided (does not check the status history collection).',
	},
	TEAM_MEMBER: {
		name: 'Team_member',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-team-member',
		description: 'A Practitioner or Organization allocated to the care team for this EpisodeOfCare.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-type',
		description: 'Type/class  - e.g. specialist referral, disease management.',
	},
};
