/**
 * @name exports
 * @static
 * @summary Arguments for the episodeofcare query
 */
module.exports = {
	'care-manager': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.careManager',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager',
		description: 'Care manager/care co-ordinator for the patient',
	},
	condition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.condition',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition',
		description: 'Conditions/problems/diagnoses this episode of care is for',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'EpisodeOfCare.period',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-date',
		description: "The provided date search value falls within the episode of care's period",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-identifier',
		description: 'Identifier(s) for the EpisodeOfCare',
	},
	incomingreferral: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.referralRequest',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incomingreferral',
		description: 'Incoming Referral Request',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.managingOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization',
		description: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-patient',
		description: 'Patient for this episode of care',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.status',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status',
		description: 'The current status of the Episode of Care as provided (does not check the status history collection)',
	},
	'team-member': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.careTeam.member',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-team-member',
		description: 'A Practitioner or Organization allocated to the care team for this EpisodeOfCare',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.type',
		definition: 'http://hl7.org/fhir/SearchParameter/EpisodeOfCare-type',
		description: 'Type/class  - e.g. specialist referral, disease management',
	},
};
