/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.code',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	'expiration-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Medication.batch.expirationDate',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-expiration-date',
		description: 'Returns medications in a batch with this expiration date',
	},
	form: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.form',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'Returns medications for a specific dose form',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-identifier',
		description: 'Returns medications with this external identifier',
	},
	ingredient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.ingredient.itemReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'Returns medications for this ingredient reference',
	},
	'ingredient-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.ingredient.itemCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient-code',
		description: 'Returns medications for this ingredient code',
	},
	'lot-number': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.batch.lotNumber',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-lot-number',
		description: 'Returns medications in a batch with this lot number',
	},
	manufacturer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Returns medications made or sold for this manufacturer',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-status',
		description: 'Returns medications for this status',
	},
};
