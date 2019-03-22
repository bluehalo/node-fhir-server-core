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
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	prescription: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.authorizingPrescription',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-prescription',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  ',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.status',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.context',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-context',
		description: 'Returns dispenses with a specific context (episode or episode of care)',
	},
	destination: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.destination',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-destination',
		description: 'Return dispenses that should be sent to a specific destination',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.performer.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-performer',
		description: 'Return dispenses performed by a specific individual',
	},
	receiver: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.receiver',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver',
		description: 'The identity of a receiver to list dispenses for',
	},
	responsibleparty: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.substitution.responsibleParty',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty',
		description: 'Return dispenses with the specified responsible party',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationDispense.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-subject',
		description: 'The identity of a patient to list dispenses  for',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationDispense.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-type',
		description: 'Return dispenses of a specific type',
	},
	whenhandedover: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenHandedOver',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover',
		description: 'Returns dispenses handed over on this date',
	},
	whenprepared: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenPrepared',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared',
		description: 'Returns dispenses prepared on this date',
	},
};
