/**
 * @name exports
 * @static
 * @summary Arguments for the visionprescription query
 */
module.exports = {
	datewritten: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'VisionPrescription.dateWritten',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten',
		description: 'Return prescriptions written on this date',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'VisionPrescription.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-encounter',
		description: 'Return prescriptions with this encounter identifier',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'VisionPrescription.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-identifier',
		description: 'Return prescriptions with this external identifier',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'VisionPrescription.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-patient',
		description: 'The identity of a patient to list dispenses for',
	},
	prescriber: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'VisionPrescription.prescriber',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber',
		description: 'Who authorizes the vision product',
	},
};
