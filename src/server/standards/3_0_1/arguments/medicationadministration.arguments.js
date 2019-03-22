/**
 * @name exports
 * @static
 * @summary Arguments for the medicationadministration query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.context',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-context',
		description: 'Return administrations that share this encounter or episode of care',
	},
	device: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.device',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		description: 'Return administrations with this administration device identity',
	},
	'effective-time': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationAdministration.effectiveDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effective-time',
		description: 'Date administration happened (or did not happen)',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	'not-given': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.notGiven',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-not-given',
		description: 'Administrations that were not made',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.performer.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-performer',
		description: 'The identify of the individual who administered the medication',
	},
	prescription: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.prescription',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-prescription',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  ',
	},
	'reason-given': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.reasonCode',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-given',
		description: 'Reasons for administering the medication',
	},
	'reason-not-given': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.reasonNotGiven',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-not-given',
		description: 'Reasons for not administering the medication',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.status',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-subject',
		description: 'The identify of the individual or group to list administrations for',
	},
};
