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
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  .',
	},
	AUTHOREDON: {
		name: 'authoredon',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon',
		documentation: 'Return prescriptions written on this date.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-category',
		documentation: 'Returns prescriptions with different categories.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-context',
		documentation: 'Return prescriptions with this encounter or episode of care identifier.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-date',
		documentation:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns medication request to be administered on a specific date  .',
	},
	INTENDED_DISPENSER: {
		name: 'intended-dispenser',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-dispenser',
		documentation: 'Returns prescriptions intended to be dispensed by this Organization.',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-intent',
		documentation: 'Returns prescriptions with different intents.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-priority',
		documentation: 'Returns prescriptions with different priorities.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-requester',
		documentation: 'Returns prescriptions prescribed by this prescriber.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-subject',
		documentation: 'The identity of a patient to list orders  for.',
	},
};
