module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date',
		description: 'Date recommendation created.',
	},
	DOSE_NUMBER: {
		name: 'Dose_number',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-number',
		description: 'Recommended dose number.',
	},
	DOSE_SEQUENCE: {
		name: 'Dose_sequence',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-sequence',
		description: 'Dose number within sequence.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier',
		description: 'Business identifier.',
	},
	INFORMATION: {
		name: 'Information',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information',
		description: 'Patient observations supporting recommendation.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient',
		description: 'Who this profile is for.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status',
		description: 'Vaccine administration status.',
	},
	SUPPORT: {
		name: 'Support',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support',
		description: 'Past immunizations supporting recommendation.',
	},
	VACCINE_TYPE: {
		name: 'Vaccine_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type',
		description: 'Vaccine recommendation applies to.',
	},
};
