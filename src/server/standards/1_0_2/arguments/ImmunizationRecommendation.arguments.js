module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date',
		description: 'Date recommendation created.',
	},
	DOSE_NUMBER: {
		name: 'dose-number',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-number',
		description: 'Recommended dose number.',
	},
	DOSE_SEQUENCE: {
		name: 'dose-sequence',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-sequence',
		description: 'Dose number within sequence.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier',
		description: 'Business identifier.',
	},
	INFORMATION: {
		name: 'information',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information',
		description: 'Patient observations supporting recommendation.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient',
		description: 'Who this profile is for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status',
		description: 'Vaccine administration status.',
	},
	SUPPORT: {
		name: 'support',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support',
		description: 'Past immunizations supporting recommendation.',
	},
	VACCINE_TYPE: {
		name: 'vaccine-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type',
		description: 'Vaccine recommendation applies to.',
	},
};
