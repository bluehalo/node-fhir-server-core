module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-code',
		description: 'Return administrations of this medication code.',
	},
	DEVICE: {
		name: 'Device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		description: 'Return administrations with this administration device identity.',
	},
	EFFECTIVETIME: {
		name: 'Effectivetime',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effectivetime',
		description: 'Date administration happened (or did not happen).',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-encounter',
		description: 'Return administrations that share this encounter.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-identifier',
		description: 'Return administrations with this external identifier.',
	},
	MEDICATION: {
		name: 'Medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-medication',
		description: 'Return administrations of this medication resource.',
	},
	NOTGIVEN: {
		name: 'Notgiven',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-notgiven',
		description: 'Administrations that were not made.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-patient',
		description: 'The identity of a patient to list administrations  for.',
	},
	PRACTITIONER: {
		name: 'Practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-practitioner',
		description: 'Who administered substance.',
	},
	PRESCRIPTION: {
		name: 'Prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-prescription',
		description: 'The identity of a prescription to list administrations from.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-status',
		description: 'MedicationAdministration event status (for example one of active/paused/completed/nullified).',
	},
};
