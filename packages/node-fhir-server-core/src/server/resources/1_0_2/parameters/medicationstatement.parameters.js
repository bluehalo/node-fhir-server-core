/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-code',
		description: 'Return administrations of this medication code',
	},
	effectivedate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationStatement.effectiveDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-effectivedate',
		description: 'Date when patient was taking (or not taking) the medication',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-identifier',
		description: 'Return statements with this external identifier',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-medication',
		description: 'Return administrations of this medication reference',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-patient',
		description: 'The identity of a patient to list statements  for',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.informationSource',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-source',
		description: 'Who the information in the statement came from',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-status',
		description: 'Return statements that match the given status',
	},
};
