module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-code',
		documentation: 'Return administrations of this medication code.',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-device',
		documentation: 'Return administrations with this administration device identity.',
	},
	EFFECTIVETIME: {
		name: 'effectivetime',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-effectivetime',
		documentation: 'Date administration happened (or did not happen).',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-encounter',
		documentation: 'Return administrations that share this encounter.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-identifier',
		documentation: 'Return administrations with this external identifier.',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-medication',
		documentation: 'Return administrations of this medication resource.',
	},
	NOTGIVEN: {
		name: 'notgiven',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-notgiven',
		documentation: 'Administrations that were not made.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-patient',
		documentation: 'The identity of a patient to list administrations  for.',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-practitioner',
		documentation: 'Who administered substance.',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-prescription',
		documentation: 'The identity of a prescription to list administrations from.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationAdministration-status',
		documentation: 'MedicationAdministration event status (for example one of active/paused/completed/nullified).',
	},
};
