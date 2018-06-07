/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	APPOINTMENT: {
		name: 'appointment',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'The appointment that scheduled this encounter',
	},
	CLASS: {
		name: 'class',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'inpatient | outpatient | ambulatory | emergency +',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'A date within the period the Encounter lasted',
	},
	DIAGNOSIS: {
		name: 'diagnosis',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Reason the encounter takes place (resource)',
	},
	EPISODEOFCARE: {
		name: 'episodeofcare',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Episode(s) of care that this encounter should be recorded against',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Identifier(s) by which this encounter is known',
	},
	INCOMINGREFERRAL: {
		name: 'incomingreferral',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'The ReferralRequest that initiated this encounter',
	},
	LENGTH: {
		name: 'length',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Length of encounter in days',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Location the encounter takes place',
	},
	LOCATION_PERIOD: {
		name: 'location-period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Time period during which the patient was present at the location',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Another Encounter this encounter is part of',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Persons involved in the encounter other than the patient',
	},
	PARTICIPANT_TYPE: {
		name: 'participant-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Role of participant in encounter',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'The patient ro group present at the encounter',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Persons involved in the encounter other than the patient',
	},
	REASON: {
		name: 'reason',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Reason the encounter takes place (code)',
	},
	SERVICE_PROVIDER: {
		name: 'service-provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'The custodian organization of this Encounter record',
	},
	SPECIAL_ARRANGEMENT: {
		name: 'special-arrangement',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Wheelchair, translator, stretcher, etc.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'planned | arrived | triaged | in-progress | onleave | finished | cancelled +',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'The patient ro group present at the encounter',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#encounter',
		documentation: 'Specific type of encounter',
	},
};
