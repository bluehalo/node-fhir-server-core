/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Date recommendation created',
	},
	DOSE_NUMBER: {
		name: 'dose-number',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Recommended dose number',
	},
	DOSE_SEQUENCE: {
		name: 'dose-sequence',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Dose number within sequence',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Business identifier',
	},
	INFORMATION: {
		name: 'information',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Patient observations supporting recommendation',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Who this profile is for',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Vaccine administration status',
	},
	SUPPORT: {
		name: 'support',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Past immunizations supporting recommendation',
	},
	TARGET_DISEASE: {
		name: 'target-disease',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Disease to be immunized against',
	},
	VACCINE_TYPE: {
		name: 'vaccine-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunizationrecommendation',
		documentation: 'Vaccine recommendation applies to',
	},
};
