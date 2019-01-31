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
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-code',
		description: 'Return administrations of this medication code',
	},
	device: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.device',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		description: 'Return administrations with this administration device identity',
	},
	effectivetime: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationAdministration.effectiveTimeDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effectivetime',
		description: 'Date administration happened (or did not happen)',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-encounter',
		description: 'Return administrations that share this encounter',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-identifier',
		description: 'Return administrations with this external identifier',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-medication',
		description: 'Return administrations of this medication resource',
	},
	notgiven: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.wasNotGiven',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-notgiven',
		description: 'Administrations that were not made',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-patient',
		description: 'The identity of a patient to list administrations  for',
	},
	practitioner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.practitioner',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-practitioner',
		description: 'Who administered substance',
	},
	prescription: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.prescription',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-prescription',
		description: 'The identity of a prescription to list administrations from',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationAdministration.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-status',
		description: 'MedicationAdministration event status (for example one of active/paused/completed/nullified)',
	},
};
