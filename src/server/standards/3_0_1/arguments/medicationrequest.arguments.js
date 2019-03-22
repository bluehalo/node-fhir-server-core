/**
 * @name exports
 * @static
 * @summary Arguments for the medicationrequest query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-patient',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	authoredon: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationRequest.authoredOn',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon',
		description: 'Return prescriptions written on this date',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.category',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-category',
		description: 'Returns prescriptions with different categories',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.context',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-context',
		description: 'Return prescriptions with this encounter or episode of care identifier',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationRequest.dosageInstruction.timing.event',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-date',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns medication request to be administered on a specific date  ',
	},
	'intended-dispenser': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.dispenseRequest.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-dispenser',
		description: 'Returns prescriptions intended to be dispensed by this Organization',
	},
	intent: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.intent',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-intent',
		description: 'Returns prescriptions with different intents',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationRequest.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-priority',
		description: 'Returns prescriptions with different priorities',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.requester.agent',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-requester',
		description: 'Returns prescriptions prescribed by this prescriber',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationRequest-subject',
		description: 'The identity of a patient to list orders  for',
	},
};
