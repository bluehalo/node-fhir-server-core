module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description: 'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-identifier',
		description: 'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  .',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		description: 'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  .',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		description: 'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  .',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		description: 'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  .',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-category',
		description: 'Returns statements of this category of medicationstatement.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-context',
		description: 'Returns statements for a specific context (episode or episode of Care).',
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-effective',
		description: 'Date when patient was taking (or not taking) the medication.',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of',
		description: 'Returns statements that are part of another event.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-source',
		description: 'Who or where the information in the statement came from.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-subject',
		description: 'The identity of a patient, animal or group to list statements for.',
	},
};
