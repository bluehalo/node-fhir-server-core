/**
 * @name exports
 * @static
 * @summary Arguments for the immunizationevaluation query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImmunizationEvaluation.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-date',
		description: 'Date the evaluation was generated',
	},
	'dose-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.doseStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-dose-status',
		description: 'The status of the dose relative to published recommendations',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-identifier',
		description: 'ID of the evaluation',
	},
	'immunization-event': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImmunizationEvaluation.immunizationEvent',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-immunization-event',
		description: 'The vaccine administration event being evaluated',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImmunizationEvaluation.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-patient',
		description: 'The patient being evaluated',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-status',
		description: 'Immunization evaluation status',
	},
	'target-disease': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.targetDisease',
		definition: 'http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-target-disease',
		description: 'The vaccine preventable disease being evaluated against',
	},
};
