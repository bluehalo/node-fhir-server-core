/**
 * @name exports
 * @static
 * @summary Arguments for the medicationdispense query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-code',
		description: 'Return dispenses of this medicine code',
	},
	destination: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.destination',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-destination',
		description: 'Return dispenses that should be sent to a specific destination',
	},
	dispenser: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.dispenser',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-dispenser',
		description: 'Return all dispenses performed by a specific individual',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-identifier',
		description: 'Return dispenses with this external identifier',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-medication',
		description: 'Return dispenses of this medicine resource',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-patient',
		description: 'The identity of a patient to list dispenses  for',
	},
	prescription: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.authorizingPrescription',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-prescription',
		description: 'The identity of a prescription to list dispenses from',
	},
	receiver: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.receiver',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver',
		description: 'Who collected the medication',
	},
	responsibleparty: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.substitution.responsibleParty',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty',
		description: 'Return all dispenses with the specified responsible party',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-status',
		description: 'Status of the dispense',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-type',
		description: 'Return all dispenses of a specific type',
	},
	whenhandedover: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenHandedOver',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover',
		description:
			'Date when medication handed over to patient (outpatient setting), or supplied to ward or clinic (inpatient setting)',
	},
	whenprepared: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenPrepared',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared',
		description: 'Date when medication prepared',
	},
};
