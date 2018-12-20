module.exports = {
	CARE_MANAGER: {
		name: 'care-manager',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager',
		documentation: 'Care manager/care co-ordinator for the patient.',
	},
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition',
		documentation: 'Conditions/problems/diagnoses this episode of care is for.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-date',
		documentation: "The provided date search value falls within the episode of care's period.",
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-identifier',
		documentation: 'Identifier(s) for the EpisodeOfCare.',
	},
	INCOMINGREFERRAL: {
		name: 'incomingreferral',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incomingreferral',
		documentation: 'Incoming Referral Request.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization',
		documentation: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-patient',
		documentation: 'Patient for this episode of care.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status',
		documentation:
			'The current status of the Episode of Care as provided (does not check the status history collection).',
	},
	TEAM_MEMBER: {
		name: 'team-member',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-team-member',
		documentation: 'A Practitioner or Organization allocated to the care team for this EpisodeOfCare.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-type',
		documentation: 'Type/class  - e.g. specialist referral, disease management.',
	},
};
