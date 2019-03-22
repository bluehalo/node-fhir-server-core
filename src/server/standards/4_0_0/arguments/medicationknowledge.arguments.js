/**
 * @name exports
 * @static
 * @summary Arguments for the medicationknowledge query
 */
module.exports = {
	classification: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.medicineClassification.classification',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification',
		description: 'Specific category assigned to the medication',
	},
	'classification-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.medicineClassification.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification-type',
		description:
			'The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.code',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-code',
		description: 'Code that identifies this medication',
	},
	doseform: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.doseForm',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-doseform',
		description: 'powder | tablets | capsule +',
	},
	ingredient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.ingredient.itemReference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient',
		description: 'Medication(s) or substance(s) contained in the medication',
	},
	'ingredient-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.ingredient.itemCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient-code',
		description: 'Medication(s) or substance(s) contained in the medication',
	},
	manufacturer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-manufacturer',
		description: 'Manufacturer of the item',
	},
	'monitoring-program-name': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monitoringProgram.name',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-name',
		description: 'Name of the reviewing program',
	},
	'monitoring-program-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monitoringProgram.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-type',
		description: 'Type of program under which the medication is monitored',
	},
	monograph: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.monograph.source',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph',
		description: 'Associated documentation about the medication',
	},
	'monograph-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monograph.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph-type',
		description: 'The category of medication document',
	},
	'source-cost': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.cost.source',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-source-cost',
		description: 'The source or owner for the price information',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationKnowledge-status',
		description: 'active | inactive | entered-in-error',
	},
};
