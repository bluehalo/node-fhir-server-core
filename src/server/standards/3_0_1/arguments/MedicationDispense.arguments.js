module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		documentation:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
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
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  .',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-prescription',
		documentation:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  .',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  .',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-context',
		documentation: 'Returns dispenses with a specific context (episode or episode of care).',
	},
	DESTINATION: {
		name: 'destination',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-destination',
		documentation: 'Return dispenses that should be sent to a specific destination.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-performer',
		documentation: 'Return dispenses performed by a specific individual.',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver',
		documentation: 'The identity of a receiver to list dispenses for.',
	},
	RESPONSIBLEPARTY: {
		name: 'responsibleparty',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty',
		documentation: 'Return dispenses with the specified responsible party.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-subject',
		documentation: 'The identity of a patient to list dispenses  for.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-type',
		documentation: 'Return dispenses of a specific type.',
	},
	WHENHANDEDOVER: {
		name: 'whenhandedover',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover',
		documentation: 'Returns dispenses handed over on this date.',
	},
	WHENPREPARED: {
		name: 'whenprepared',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared',
		documentation: 'Returns dispenses prepared on this date.',
	},
};
