module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date',
		documentation: 'Date recommendation created.',
	},
	DOSE_NUMBER: {
		name: 'dose-number',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-number',
		documentation: 'Recommended dose number.',
	},
	DOSE_SEQUENCE: {
		name: 'dose-sequence',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-sequence',
		documentation: 'Dose number within sequence.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier',
		documentation: 'Business identifier.',
	},
	INFORMATION: {
		name: 'information',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information',
		documentation: 'Patient observations supporting recommendation.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient',
		documentation: 'Who this profile is for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status',
		documentation: 'Vaccine administration status.',
	},
	SUPPORT: {
		name: 'support',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support',
		documentation: 'Past immunizations supporting recommendation.',
	},
	VACCINE_TYPE: {
		name: 'vaccine-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type',
		documentation: 'Vaccine recommendation applies to.',
	},
};
