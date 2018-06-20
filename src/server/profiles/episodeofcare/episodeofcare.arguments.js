module.exports = {
	CARE_MANAGER: {
		name: 'care-manager',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'Care manager/care co-ordinator for the patient',
	},
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'Conditions/problems/diagnoses this episode of care is for',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'The provided date search value falls within the episode of care\'s period',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'Business Identifier(s) relevant for this EpisodeOfCare',
	},
	INCOMINGREFERRAL: {
		name: 'incomingreferral',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'Incoming Referral Request',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'The patient who is the focus of this episode of care',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'The current status of the Episode of Care as provided (does not check the status history collection)',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#episodeofcare',
		documentation: 'Type/class - e.g. specialist referral, disease management',
	},
};
