/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Return administrations of this medication code',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Return administrations that share this encounter or episode of care',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Return administrations with this administration device identity',
	},
	EFFECTIVE_TIME: {
		name: 'effective-time',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Date administration happened (or did not happen)',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Return administrations with this external identifier',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Return administrations of this medication resource',
	},
	NOT_GIVEN: {
		name: 'not-given',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Administrations that were not made',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'The identity of a patient to list administrations for',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'The identify of the individual who administered the medication',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'The identity of a prescription to list administrations from',
	},
	REASON_GIVEN: {
		name: 'reason-given',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Reasons for administering the medication',
	},
	REASON_NOT_GIVEN: {
		name: 'reason-not-given',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'Reasons for not administering the medication',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'MedicationAdministration event status (for example one of active/paused/completed/nullified)',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationadministration',
		documentation: 'The identify of the individual or group to list administrations for',
	},
};
