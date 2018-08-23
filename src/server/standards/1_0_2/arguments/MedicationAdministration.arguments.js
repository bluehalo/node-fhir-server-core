module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-code',
		description: 'Return administrations of this medication code.',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		description: 'Return administrations with this administration device identity.',
	},
	EFFECTIVETIME: {
		name: 'effectivetime',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effectivetime',
		description: 'Date administration happened (or did not happen).',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-encounter',
		description: 'Return administrations that share this encounter.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-identifier',
		description: 'Return administrations with this external identifier.',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-medication',
		description: 'Return administrations of this medication resource.',
	},
	NOTGIVEN: {
		name: 'notgiven',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-notgiven',
		description: 'Administrations that were not made.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-patient',
		description: 'The identity of a patient to list administrations  for.',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-practitioner',
		description: 'Who administered substance.',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-prescription',
		description: 'The identity of a prescription to list administrations from.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-status',
		description: 'MedicationAdministration event status (for example one of active/paused/completed/nullified).',
	},
};
