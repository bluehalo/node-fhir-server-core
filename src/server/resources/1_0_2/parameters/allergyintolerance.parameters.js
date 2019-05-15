/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.category',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category',
		description: 'food | medication | environment | other - Category of Substance',
	},
	criticality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.criticality',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality',
		description: 'CRITL | CRITH | CRITU',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.recordedDate',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-date',
		description: 'When recorded',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-identifier',
		description: 'External ids for this item',
	},
	'last-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.lastOccurence',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date',
		description: 'Date(/time) of last known occurrence of a reaction',
	},
	manifestation: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.manifestation',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation',
		description: 'Clinical symptoms/signs associated with the Event',
	},
	onset: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.reaction.onset',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset',
		description: 'Date(/time) when manifestations showed',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-patient',
		description: 'Who the sensitivity is for',
	},
	recorder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.recorder',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder',
		description: 'Who recorded the sensitivity',
	},
	reporter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.reporter',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-reporter',
		description: 'Source of the information about the allergy',
	},
	route: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.exposureRoute',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route',
		description: 'How the subject was exposed to the substance',
	},
	severity: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.severity',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity',
		description: 'mild | moderate | severe (of event as a whole)',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.status',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-status',
		description: 'active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error',
	},
	substance: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.substance',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-substance',
		description: 'Substance, (or class) considered to be responsible for risk',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.type',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-type',
		description: 'allergy | intolerance - Underlying mechanism (if known)',
	},
};
