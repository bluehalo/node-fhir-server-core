module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-code',
		documentation: 'Return dispenses of this medicine code.',
	},
	DESTINATION: {
		name: 'destination',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-destination',
		documentation: 'Return dispenses that should be sent to a specific destination.',
	},
	DISPENSER: {
		name: 'dispenser',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-dispenser',
		documentation: 'Return all dispenses performed by a specific individual.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-identifier',
		documentation: 'Return dispenses with this external identifier.',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-medication',
		documentation: 'Return dispenses of this medicine resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-patient',
		documentation: 'The identity of a patient to list dispenses  for.',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-prescription',
		documentation: 'The identity of a prescription to list dispenses from.',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver',
		documentation: 'Who collected the medication.',
	},
	RESPONSIBLEPARTY: {
		name: 'responsibleparty',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty',
		documentation: 'Return all dispenses with the specified responsible party.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-status',
		documentation: 'Status of the dispense.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-type',
		documentation: 'Return all dispenses of a specific type.',
	},
	WHENHANDEDOVER: {
		name: 'whenhandedover',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover',
		documentation:
			'Date when medication handed over to patient (outpatient setting), or supplied to ward or clinic (inpatient setting).',
	},
	WHENPREPARED: {
		name: 'whenprepared',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared',
		documentation: 'Date when medication prepared.',
	},
};
