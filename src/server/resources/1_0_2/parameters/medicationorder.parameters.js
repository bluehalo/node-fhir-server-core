/**
 * @name exports
 * @static
 * @summary Arguments for the medicationorder query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationOrder.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-code',
		description: 'Return administrations of this medication code',
	},
	datewritten: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationOrder.dateWritten',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-datewritten',
		description: 'Return prescriptions written on this date',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationOrder.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-encounter',
		description: 'Return prescriptions with this encounter identifier',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationOrder.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-identifier',
		description: 'Return prescriptions with this external identifier',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationOrder.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-medication',
		description: 'Return administrations of this medication reference',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationOrder.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-patient',
		description: 'The identity of a patient to list orders  for',
	},
	prescriber: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationOrder.prescriber',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-prescriber',
		description: 'Who ordered the medication(s)',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationOrder.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-status',
		description: 'Status of the prescription',
	},
};
