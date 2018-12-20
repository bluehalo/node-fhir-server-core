module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		documentation:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-context',
		documentation: 'Return administrations that share this encounter or episode of care.',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		documentation: 'Return administrations with this administration device identity.',
	},
	EFFECTIVE_TIME: {
		name: 'effective-time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effective-time',
		documentation: 'Date administration happened (or did not happen).',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-identifier',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  .',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  .',
	},
	NOT_GIVEN: {
		name: 'not-given',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-not-given',
		documentation: 'Administrations that were not made.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  .',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-performer',
		documentation: 'The identify of the individual who administered the medication.',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-prescription',
		documentation:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  .',
	},
	REASON_GIVEN: {
		name: 'reason-given',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-given',
		documentation: 'Reasons for administering the medication.',
	},
	REASON_NOT_GIVEN: {
		name: 'reason-not-given',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-not-given',
		documentation: 'Reasons for not administering the medication.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  .',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-subject',
		documentation: 'The identify of the individual or group to list administrations for.',
	},
};
