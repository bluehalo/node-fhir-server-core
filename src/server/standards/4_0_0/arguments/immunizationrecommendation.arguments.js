/**
 * @name exports
 * @static
 * @summary Arguments for the immunizationrecommendation query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImmunizationRecommendation.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date',
		description: 'Date recommendation(s) created',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationRecommendation.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier',
		description: 'Business identifier',
	},
	information: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImmunizationRecommendation.recommendation.supportingPatientInformation',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information',
		description: 'Patient observations supporting recommendation',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImmunizationRecommendation.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient',
		description: 'Who this profile is for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationRecommendation.recommendation.forecastStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status',
		description: 'Vaccine recommendation status',
	},
	support: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImmunizationRecommendation.recommendation.supportingImmunization',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support',
		description: 'Past immunizations supporting recommendation',
	},
	'target-disease': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationRecommendation.recommendation.targetDisease',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-target-disease',
		description: 'Disease to be immunized against',
	},
	'vaccine-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationRecommendation.recommendation.vaccineCode',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type',
		description: 'Vaccine  or vaccine group recommendation applies to',
	},
};
